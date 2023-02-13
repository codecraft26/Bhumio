export class CreateUserDto {


    name:string
    email:string
    password:string
    role:{
        type:role
        default:role.user
    }

}
enum role{
   admin ,
   user,
   poweruser,
   supportdesk


}