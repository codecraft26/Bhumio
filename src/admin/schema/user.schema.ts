import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type } from "os"




export type UserDocument=User & Document
@Schema()
export class User{
        @Prop()
        name:string
        @Prop()
        email:string
        @Prop()
        password:string
        @Prop({required:true,default:"user"})
        role:string        

      
}











export const UserSchema=SchemaFactory.createForClass(User)