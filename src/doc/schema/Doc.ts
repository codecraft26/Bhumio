import { Prop, Schema } from "@nestjs/mongoose";
import { Mongoose, Types } from "mongoose";
import { type } from "os";

export type docDocument=Doc & Document
@Schema()
export class Doc{

    @Prop()
    task:string
    @Prop()
    description:string

    @Prop()
    createdBy:{
       type:Types.ObjectId
       ref:"User"


    }
    

}