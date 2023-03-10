import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from '@nestjs/common';
import { Product } from './schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleGaurd } from 'src/role.gaurds';
import { CONSTANTS } from 'src/Constants';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService,) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  createProduct(@Request() req, @Body() CreateProductDto:CreateProductDto):Promise<Product>{
    return this.productService.createProduct({...CreateProductDto,createdBy:req.user})

  }


  
  @UseGuards(AuthGuard('jwt'))
  @Get('allproducts')
  getAllProduct():Promise<Product[]>{
    return this.productService.getAllproduct();

  }


  
  @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.USER) )
  @Delete(':id')
  deleteProduct(@Param('id') id:string){
    return this.productService.deleteProduct(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id:string,@Body() UpdateProductDto:UpdateProductDto){
    return this.productService.
    updateProduct(id,UpdateProductDto)
  }

  @Get('user/:id')
  getProductById(@Param('id') id:string){
    return this.productService.getProductsByUser(id)
  }




  



  
  

  


 
}
