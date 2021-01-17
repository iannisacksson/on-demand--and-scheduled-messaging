import path from 'path';
import Queue from '../../lib/Queue';

import { users } from '../../../db';

class SendMailService {
  async execute() {
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
  }
}

export default SendMailService;
