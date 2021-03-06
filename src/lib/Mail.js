import nodemailer from 'nodemailer';
import HandlebarsMailTemplate from './HandlebarsMailTemplate';

export default class Mail {
  constructor() {
    this.handlebarsMailTemplate = new HandlebarsMailTemplate();
  }

  async sendMail(to, from, subject, templateData) {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const message = await transporter.sendMail({
      from: {
        name: from?.name || 'Equipe Back-end',
        address: from?.email || 'equipe@backend.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.handlebarsMailTemplate.parse(templateData),
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
