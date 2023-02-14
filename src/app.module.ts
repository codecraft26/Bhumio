import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config/dist';

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
  


  
   
  
   
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
