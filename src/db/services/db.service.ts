import { Injectable } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { createDatabase, dropDatabase } from 'typeorm-extension';



@Injectable()
export class DbService {
  //
  private options: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'nestjs_mysql',
  };

   createDB = async function()  {
    await createDatabase({options: this.options});
    return 'done create nestjs_mysql db in MySQL'

  }
  async dropDB(){

    await dropDatabase({options: this.options});
    return 'done drop nestjs_mysql db in MySQL'
  }
}
