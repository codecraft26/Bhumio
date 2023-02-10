import { Types } from "mongoose"

export class CreateDocDto {

    task:string
    description:String


    createdBy:{
        type:Types.ObjectId
        ref:"User"
 
 
     }


}
