import { Inject, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductService } from '../product.service';

@Injectable()
export class AccessMiddleware implements NestMiddleware {

    constructor( @Inject('ProductService') private readonly ProductService:ProductService ,id:string ){

    }
  use(req: Request, res: Response, next: Function) {


    const productid=this.ProductService
    const userid=req.user
    if(productid==userid){
      next();
    }
    else{
      res.status(401).send('Unauthorized');
    }
   

   
    
    
    
   
  }
}