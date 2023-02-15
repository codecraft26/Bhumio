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
import { User } from 'src/auth/schema/user.schema';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService,) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.ADMIN))
  createProduct(@Request() req, @Body() CreateProductDto:CreateProductDto):Promise<Product>{
    // CreateProductDto.createdBy=req.user
    return this.productService.createProduct({...CreateProductDto,createdBy:req.user})

  }


  
  @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.SUPPORTDESK ||CONSTANTS.ROLES.USER))
  
  @Get('allproducts')
  getAllProduct():Promise<Product[]>{
    return this.productService.getAllproduct();

  }


  
  @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.ADMIN) )
  @Delete(':id')
  deleteProduct(@Param('id') id:string){
    return this.productService.deleteProduct(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id:string,@Body() UpdateProductDto:UpdateProductDto){
    return this.productService.
    updateProduct(id,UpdateProductDto)
  }



 @Get("/web")
  @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.ADMIN))

  webDeveloperData(@Request() req):string{
    return "this is private data for web developer"+JSON.stringify(req.user)
  }
  

  // @Get(':id')
  // getProductByid(@Param('id') id:string):Promise<Product>{

  //   return this.productService.getProductById(id);

  // }
  // @Get(':id')

  @Get(':id')
  getProductUser(@Param('id') id:string):Promise<User>{

   return this.productService.getUser(id)


  
  }

  
  

  


 
}
