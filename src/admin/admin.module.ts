import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { User } from './schemas/user.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schemas';
import { forwardRef } from '@nestjs/common';

@Module({

  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
