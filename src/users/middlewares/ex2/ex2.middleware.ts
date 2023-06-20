import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class Ex2Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('exec another middleware')
    next();
  }
}
