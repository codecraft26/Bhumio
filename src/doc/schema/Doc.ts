import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";
import {  Types } from "mongoose";

export type docDocument=Doc & Document
@Schema()
export class Doc{

    @Prop()
    task:string
    @Prop()
    description:string

    @Prop( {type:Types.ObjectId})
    createdBy:{
       type:Types.ObjectId
       ref:"User"
    }
}

export const DocSchema=SchemaFactory.createForClass(Doc)



