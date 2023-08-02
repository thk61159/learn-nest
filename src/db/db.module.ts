import { Module } from '@nestjs/common';
import { DbController } from './controllers/db.controller';
import { DbService } from './services/db.service';

@Module({
  controllers: [DbController],
  providers: [DbService]
})
export class DbModule {}
