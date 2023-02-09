import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PoweruserModule } from './poweruser/poweruser.module';
import { SupportDeskModule } from './support-desk/support-desk.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config/dist';
@Module({
  imports: [UserModule, PoweruserModule, SupportDeskModule, AdminModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:[".local.env"]

    }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(ConfigService:ConfigService)=>({
          uri:ConfigService.get("MONGO_URL")

      }),
      inject:[ConfigService]
    }),
    UserModule
   
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
