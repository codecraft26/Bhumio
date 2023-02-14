
import { User } from "src/auth/schema/user.schema"
export class CreateProductDto {
    productName:string
    productDesc:string
    productType:string
    createdBy:User
}
