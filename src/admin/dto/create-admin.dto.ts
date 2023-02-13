import { role } from "src/user/schemas/User";

export class CreateAdminDto {

    name:string;
    email:string;
    password;string;
    role:role.user;


}
