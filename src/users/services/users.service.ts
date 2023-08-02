import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatUserParams, UserProfileParams, CreatPostParams } from 'src/utils/types';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Post';
// import { Table } from 'src/typeorm/entities/Table';
@Injectable()
export class UsersService {
   constructor(
      @InjectRepository(User) private userRepoository: Repository<User>,
      @InjectRepository(Profile) private profileRepoository: Repository<Profile>,
      @InjectRepository(Post) private postRepoository: Repository<Post>,
      // @InjectRepository(Table) private tableRepoository: Repository<Table>
      ) { }
   async getUsers() {
      // let test = await this.tableRepoository.find()
      // console.log(test)
      return this.userRepoository.find({ relations: ['profile', 'posts'] })
   }

   creatUser(userDetial: CreatUserParams) {
      
      const newUser = this.userRepoository.create({ ...userDetial, createdAt: new Date() }) //it just create instance
      return this.userRepoository.save(newUser)
   }

   getUser(id: number) {
      return this.userRepoository.findOneBy({ id })
   }
   async updateUser(id: number, userDetial: CreatUserParams) {
      const update = await this.userRepoository.update({ id }, { ...userDetial })
      if (!update.affected) throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
      const updateUser = await this.userRepoository.findBy({ id })
      return updateUser
   }
   async deleteUser(id: number) {
      const user = await this.userRepoository.findOneBy({ id })
      if (!user) throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
      const deleteUser = await this.userRepoository.delete({ id })
      return user
   }
   async creatProfile(id: number, userProfile: UserProfileParams) {
      const user = await this.userRepoository.findOneBy({ id })
      if (!user) throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
      const profile = this.profileRepoository.create(userProfile)
      // console.log('profile format for db', profile)
      profile.user = user
      const savedProfile = await this.profileRepoository.save(profile)
      // console.log('saved profile and return ', savedProfile)
      
      console.log('going to save relationship', user)
      return savedProfile //save the  relation key
   }

   async creatPost(id: number, creatPost: CreatPostParams) {
      const user = await this.userRepoository.findOneBy({ id })
      if (!user) throw new HttpException('user not found', HttpStatus.BAD_REQUEST)
      const post = this.postRepoository.create(creatPost)
      console.log('post format for db', post)
      post.user = user
      console.log('saved post and return', post)
      return this.postRepoository.save(post)
   }
}