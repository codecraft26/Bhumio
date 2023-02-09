export class CreateUserDto {


    name:string
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