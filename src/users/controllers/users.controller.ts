import { Body, Controller, Delete, Get,HttpException, HttpStatus, ParseIntPipe, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { CreateProfileDto } from '../dtos/CreateProfile.dto';
import { CreatePostDto } from '../dtos/CreatePost.dto';

@Controller('users')
export class UsersController {
  constructor(private userService:UsersService){}
  @Get()
  getUsers(){
    return this.userService.getUsers()
  }
  @Post()
  createUser(@Body() createUserDto:CreateUserDto){
    return this.userService.creatUser(createUserDto)
  }
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id:number ){
    const user = await this.userService.getUser(id)
    if(!user) throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
    return user
  }
  @Patch(':id')
  updateUserById(@Param('id', ParseIntPipe) id:number , @Body() updateUserDto:UpdateUserDto){
    return this.userService.updateUser(id, updateUserDto)
  }

  @Delete(':id')
  deleteUserById(@Param('id', ParseIntPipe) id:number ){
    return this.userService.deleteUser(id)
  }
  @Post(':id/profiles')
  createProfile(@Param('id', ParseIntPipe) id:number, @Body() createProfileDto:CreateProfileDto){
    return this.userService.creatProfile(id, createProfileDto)
  }
  @Post(':id/posts')
  createPost(@Param('id', ParseIntPipe) id:number, @Body() createPostDto:CreatePostDto){
    return this.userService.creatPost(id, createPostDto)
  }
}
