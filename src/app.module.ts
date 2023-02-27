import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config/dist';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [
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
    EventEmitterModule.forRoot(),ScheduleModule.forRoot(),
    AuthModule,
    ProductModule,
    NodemailerModule,
  


  
   
  
   
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}