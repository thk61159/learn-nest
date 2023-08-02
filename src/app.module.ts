import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';
import { DbModule } from './db/db.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({ //data source ops: https://typeorm.io/data-source-options
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'password',
      database:'nestjs_mysql',
      entities:[User, Profile, Post],//entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations:[],
      synchronize:true, // everysingle time we modify entities it auto update the table
      /*!!!Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.*/ 
      
  }),
    UsersModule,
    DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
