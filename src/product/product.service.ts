import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';
import { Request } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel:Model<Product>){

  }

  async createProduct(CreateProductDto:CreateProductDto):Promise<Product>{

      

    const createProduct= new this.productModel({...CreateProductDto})
    return createProduct.save();
    

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

  async getPosts() {
    return this.productModel.find().populate(' users');
  }







}
