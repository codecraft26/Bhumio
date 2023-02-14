import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CONSTANTS } from 'src/Constants';
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

}

export const UserSchema = SchemaFactory.createForClass(User);