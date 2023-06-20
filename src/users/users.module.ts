import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExMiddleware } from './middlewares/ex/ex.middleware';
import { Ex2Middleware } from './middlewares/ex2/ex2.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ExMiddleware)
    .forRoutes({ path: 'users', method: RequestMethod.GET },{ path: 'users/:userId', method: RequestMethod.GET })
    .apply(Ex2Middleware)
    .forRoutes({ path: 'users', method: RequestMethod.GET },{ path: 'users/:userId', method: RequestMethod.GET })
    // consumer.apply(ExMiddleware).forRoutes(UsersController) 
    
  }
}
