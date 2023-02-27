import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './schema/product.schema'
import { Request } from '@nestjs/common'
import { Model } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { ObjectId } from 'mongodb';



@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel:Model<Product>,private  authService:AuthService){

  }

  async createProduct(CreateProductDto:CreateProductDto):Promise<Product>{

      

    const createProduct= new this.productModel({...CreateProductDto})
    return createProduct.save();
    

  }

  async getProductById(id:string){

    return this.productModel.findById(id).exec()

  }

  //get user who created the product

async getUser(id:string):Promise<User>{

  const result:Promise<Product>=this.getProductById(id);
  const news=(await result).createdBy
    console.log(typeof ((await result).createdBy))

    const aman=news
    const objectIdString=aman.toString();
    console.log(objectIdString)
    return this.authService.getUserById(objectIdString)

 
}




  async getAllproduct():Promise<Product[]>{
    return this.productModel.find().exec();

  }

  async updateProduct(id:String,UpdateProductDto:UpdateProductDto){
    return this.productModel.updateOne({_id:id},{

      productName:UpdateProductDto.productName,
      productDesc:UpdateProductDto.productDesc

  
    }).exec();
  }


  async deleteProduct(id:String){

    return this.productModel.deleteOne({_id:id}).exec();


  }



  async getProductsByUser(id:string):Promise<Product[]>{
      
      return this.productModel.find({createdBy:id}).exec();
  }

 







}

