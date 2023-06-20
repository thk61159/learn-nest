import { Body, Controller, HttpException, HttpStatus, Get, Param, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateNewUserPipe } from 'src/users/pipes/validate-create-new-user/validate-create-new-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';
@Controller('users')
// @UseGuards(AuthGuard) //all end point
export class UsersController {
  constructor(private usersService: UsersService) { }
  @Get()
  @UseGuards(AuthGuard) //single end point
  getUsers(@Query('sortBy') sortBy?: string, @Query('sortAsc') sortAsc?: boolean) {
    return this.usersService.fetchUsers();
  }
  @Get(':userId')
  getUserById(@Param('userId', ParseIntPipe) userId: number) {
    const user = this.usersService.findUserById(userId)
    if (!user) throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
    return user
  }
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateNewUserPipe) Data: CreateUserDto) {
    console.log(Data, typeof Data.age)
    return this.usersService.creatUser(Data)
  }
}
