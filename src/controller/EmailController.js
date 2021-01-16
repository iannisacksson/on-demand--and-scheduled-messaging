import path from 'path';
import Mail from '../lib/Mail';
import Queue from '../lib/Queue';

const users = [
  {
    name: 'Iann Isacksson',
    email: 'iisackssonoliveira@gmail.com',
  },
  {
    name: 'Lucas Oliveira',
    email: 'loliveira@gmail.com',
  },
  {
    name: 'Freddy da Massa',
    email: 'freddydamassa@gmail.com',
  },
];

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

    await Promise.all(
      users.map(async user => {
        await Queue.add('RegistrationMail', {
          to: {
            name: user.name,
            email: user.email,
          },
          subject: 'Teste',
          forgotPasswordTemplate,
        });
      }),
    );

    response.status(204).json();
  }
}
