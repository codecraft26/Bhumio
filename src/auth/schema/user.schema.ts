import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { CONSTANTS } from 'src/Constants';
import { Product } from 'src/product/schema/product.schema';
export type UserDocument=User & Document
@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;
  @Prop({required:true,default:CONSTANTS.ROLES.USER})
  role:string

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Product'})
  createdProduct:Product[]

}


export const UserSchema = SchemaFactory.createForClass(User);