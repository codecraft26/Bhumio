import { Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/Constants';
import { User } from './user.entity';

@Injectable()
export class UserService {
  public users: User[] = [{
    username: 'aman',
    password: '1234561',
    email: "user@gmail.com",
    age: 22,role:CONSTANTS.ROLES.ADMIN


},
{
    username: 'amang',
    password: '1234562',
    email: "user@gmail.com",
    age: 22,role:CONSTANTS.ROLES.ADMIN


},
{
    username: 'aman',
    password: '1234563',
    email: "user@gmail.com",
    age: 22,role:CONSTANTS.ROLES.USER


},
{
    username: 'aman',
    password: '1234564',
    email: "user@gmail.com",
    age: 22,role:CONSTANTS.ROLES.USER

}
]


getUserByUserName(username:string):User{
    return this.users.find((user:User)=>user.username===username)
}



getAllUser():User[]{
  return this.users ;

}

addUser(user:User){

  return this.users.push(user);


}
}