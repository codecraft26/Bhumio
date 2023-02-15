// import { CanActivate, ExecutionContext } from "@nestjs/common";
// import { User } from "./auth/schema/user.schema";
// import { ProductModule } from "./product/product.module";
// import { ProductService } from "./product/product.service";

// export class UserGuards implements CanActivate{
//         private productId:String


//         constructor(private readonly productService:ProductService){


            
//         }
//     canActivate(context: ExecutionContext): boolean  {

              
//         const ctx=context.switchToHttp();
//         const request:any=ctx.getRequest<Request>();
//         const pram=request.params;
//         const productId=pram.id;

//         const userId:Promise<string>=this.productService.getUserId(productId)

//         const reqUser=request.user.id

//         return reqUser==userId

        
       

           


       
//         return this.productId==request.user.id
        
//     }

// }


