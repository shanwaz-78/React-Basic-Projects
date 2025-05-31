import * as bcrypt from 'bcrypt';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<{ success: boolean; createdUser: Partial<User> }> {
    try {
      const { email, password } = createUserDto;

      const isUserExists = await this.userRepository.findOne({
        where: { email },
      });
      if (isUserExists) {
        throw new BadRequestException(
          `User with email ${email} already exists`,
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

      const { password: _, ...restInfo } = await this.userRepository.save(user);

      return { success: true, createdUser: restInfo };
    } catch (error) {
      throw new BadRequestException(error.message || 'User creation failed');
    }
  }

  async login(loginDto: {
    email: string;
    password: string;
  }): Promise<{ success: boolean; token: string }> {
    try {
      const { email, password } = loginDto;

      const user = await this.userRepository.findOne({ where: { email } });
      if (!user) {
        throw new NotFoundException(`No user found with email ${email}`);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new BadRequestException('Invalid email or password');
      }

      const { password: _, ...restInfo } = user;
      const token = this.jwtService.sign(restInfo);

      return { success: true, token };
    } catch (error) {
      throw new BadRequestException(error.message || 'Login failed');
    }
  }
}
