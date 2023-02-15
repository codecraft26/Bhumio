import { Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { NodemailerController } from './nodemailer.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
  imports:[

    MailerModule.forRootAsync({
      // imports: [ConfigModule], // import module if not enabled globally
      useFactory: async (config: ConfigService) => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          host:'smtp.gmail.com',
          port:'995',
          secure: false,
          socketTimeout:6000,
          auth: {
            user: 'codescraft26@gmail.com',
            pass: 'amangupta2626A',
          },
          
        },
        defaults: {
          from: `"No Reply" <${"gaman0221@getMaxListeners.com"}>`,
        }
       
      
      }),
      inject: [ConfigService],
    }),
  

  ],
  controllers: [NodemailerController],
  providers: [NodemailerService],
  exports:[NodemailerService]
})
export class NodemailerModule {}
