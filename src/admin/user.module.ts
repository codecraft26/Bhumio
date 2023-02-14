import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';
@Module({
  
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],imports:[ forwardRef(() => AuthModule),MongooseModule.forFeature([{name:User.name,schema:UserSchema}])], 
})
export class UserModule {}
