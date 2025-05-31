import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    const { password, confirmPassword } = createUserDto;
    if (password !== confirmPassword) {
      throw new BadRequestException(
        'Password does not match. Please try again.',
      );
    }
    return this.userService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }
}
