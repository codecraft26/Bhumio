import { forwardRef, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/product.schema';
import { Product } from './schema/product.schema';
import { AuthModule } from 'src/auth/auth.module';
import { NodemailerService } from 'src/nodemailer/nodemailer.service';

@Module({

  imports:[AuthModule,MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService],
  exports:[ProductService]
})


export class ProductModule{}