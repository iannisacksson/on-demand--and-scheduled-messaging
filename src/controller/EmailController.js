import path from 'path';
import Mail from '../lib/Mail';

export default class EmailController {
  async create(request, response) {
    const mail = new Mail();

    const to = {
      name: 'Iann Isacksson',
      email: 'iisackssonoliveira@gmail.com',
    };

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    await mail.sendMail(to, {}, 'Teste', {
      file: forgotPasswordTemplate,
      variables: {
        link: 'Link',
        name: to.name,
        logo: process.env.DEFAULT_LOGO_URL,
      },
    });
    response.status(204).json();
  }
}
