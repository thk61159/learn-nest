import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { userName: 'tina', email: 'tina@example.com' }, 
    { userName: 'ben', email: 'ben@example.com' }, 
    { userName: 'sara', email: 'sara@example.com' }, 
    { userName: 'ted', email: 'ted@example.com' }, 
    { userName: 'grey', email: 'grey@example.com' }]
  fetchUsers() {
    return this.fakeUsers
  }
  creatUser(data:{userName:string, email:string}){
    this.fakeUsers.push(data)
    return {status:'success', data}
  }
  findUserById(id:number){
    return this.fakeUsers[Number(id)] 
  }
}
