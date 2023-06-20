import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express'
@Injectable()
export class ExMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('exec middleware')

    const { authorization } = req.headers
    console.log(authorization)
    if (!authorization) throw new HttpException('No auth token', HttpStatus.FORBIDDEN)
    if(authorization==='1234') next();
    else
    throw new HttpException('Invalid auth token', HttpStatus.FORBIDDEN)
    
  }
}
