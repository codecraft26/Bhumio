import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { CONSTANTS } from "src/Constants";
import { Schema } from "@nestjs/mongoose";
import { User } from "src/auth/schema/user.schema";
import mongoose from "mongoose";
export type ProductDocument=Product & Document


@Schema({
    timestamps: true,
  })
export class Product {

    @Prop()
    productName:string
    @Prop()
    productDesc:string
    @Prop({default:CONSTANTS.PRODUCTTYPE.SNACKS})
    productType:string
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})
    createdBy:User
    


}

export const ProductSchema=SchemaFactory.createForClass(Product)