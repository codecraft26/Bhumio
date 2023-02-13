import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './schemas/User';

@Module({
  controllers: [UserController],
  providers: [UserService],
 
})
export class UserModule {}
