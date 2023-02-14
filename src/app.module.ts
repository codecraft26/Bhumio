import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config/dist';
import { MailerModule } from '@nestjs-modules/mailer';
import { UserModule } from './user/user.module';
import { UserSchema } from './user/schema/user.schema';
import { AuthModule } from './auth/auth.module';
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


    MongooseModule.forFeature([{name:"user",schema:UserSchema}]),
    UserModule,
    MailerModule.forRoot({
      transport:{
        host:'',
        auth:{
          user:' ',
          pass:''
        }
        
      }
    }),
    AuthModule,
   
  
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
