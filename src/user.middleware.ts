// import { Request, Response } from 'express';
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { ProductService } from './product/product.service';
// import { ExecutionContext } from '@nestjs/common';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {

//     constructor (private readonly productService:ProductService){

//     }


//   use(req: Request, res: Response, next: Function) {
   


//         const pram=req.params;
//         const productId=pram.id;

//         const userId:Promise<string>=this.productService.getUserId(productId)

//         const reqUser=req.user

//         return reqUser==userId

//     next();
//   }
// }