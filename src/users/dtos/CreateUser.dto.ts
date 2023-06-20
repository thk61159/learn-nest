import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age:number
}
