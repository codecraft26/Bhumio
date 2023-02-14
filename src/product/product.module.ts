import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/product.schema';
import { Product } from './schema/product.schema';

@Module({

  imports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
