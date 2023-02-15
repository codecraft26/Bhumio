import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/schema/user.schema';
@Injectable()
export class NodemailerService {
    constructor(private mailerService:MailerService){}
    async sendUserConfirmation( token: string) {
        const url = `example.com/auth/confirm?token=${token}`;
    
        await this.mailerService.sendMail({
          to: "gaman0221@gmail.com",
          // from: '"Support Team" <support@example.com>', // override default from
          subject: 'Welcome to Nice App! Confirm your Email',
          template: './transactional', // either change to ./transactional or rename transactional.html to confirmation.html
          context: {
            name: "aman",
            url,
          },
        });
      }

  
}
