import { Controller, Get, Post  } from '@nestjs/common';
import { DbService } from '../services/db.service';

@Controller('db')
export class DbController {
  constructor(private dbServices:DbService ){}
  @Get()
  justTest(){
    return 'access db route!'
  }

  @Post('create')
  createDB(){
    return this.dbServices.createDB()
  }

  @Post('drop')
  dropDB(){
    return this.dbServices.dropDB()
  }
}
