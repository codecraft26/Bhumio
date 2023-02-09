import { Schema, SchemaFactory } from "@nestjs/mongoose"




export type UserDocument=User & Document
@Schema()
export class User{

        name:string
        role:{
                type:role
                default:role.user
        }
        

        // if 0-> user 
        // 1--> Admin
        // 2--> Poweruser
        // 3-->supportesk

}


enum  role{

        admin, 
        user,
        powerUser,
        supportDesk
        

}







export const UserSchema=SchemaFactory.createForClass(User)
