import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

import { NodemailerService } from './nodemailer.service';
import { text } from 'stream/consumers';
@Module({
  imports:[

    MailerModule.forRootAsync({
      // imports: [ConfigModule], // import module if not enabled globally
      useFactory: async (config: ConfigService) => ({
        // transport: config.get("MAIL_TRANSPORT"),
        // or
        transport: {
          host: config.get('MAIL_HOST'),
          secure: false,
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        
        },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        }
        
        ,
        template: {
          dir: __dirname + '/templates/'},
          
       
      }),
      inject: [ConfigService],
    }),
  

  ],
  providers: [NodemailerService],
  exports:[NodemailerService]
})
export class NodemailerModule {}
