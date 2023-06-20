import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateCreateNewUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    const parseAge = parseInt(value.age)
    if (isNaN(parseAge)) throw new HttpException('age should be number', HttpStatus.BAD_REQUEST)

    return {...value, age:parseAge};
  }
}
