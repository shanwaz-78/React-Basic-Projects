import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(3, { message: 'The minimum length should be 3' })
  @IsString({ message: 'Name should be a string.' })
  name: string;

  @IsNotEmpty({ message: 'Please provide an email.' })
  @IsEmail({}, { message: 'Invalid email format.' })
  email: string;

  @IsNotEmpty({ message: 'Please provide a password.' })
  @MinLength(6, { message: 'Password must be at least 6 characters long.' })
  password: string;

  @IsNotEmpty({ message: 'Please confirm your password.' })
  @IsString({ message: 'Confirm password should be a string.' })
  confirmPassword: string;
}

export class LoginDto {
  @IsNotEmpty({ message: 'Please provide a password.' })
  @IsEmail({}, { message: 'Invalid email format.' })
  email!: string;

  @IsNotEmpty({ message: 'Please provide a password.' })
  password!: string;
}
