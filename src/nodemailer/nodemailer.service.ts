import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
@Injectable()
export class NodemailerService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(email:string, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',

       // either change to ./transactional or rename transactional.html to confirmation.html
      context: {
        name: "aman",
        
      },
    });
  }
}