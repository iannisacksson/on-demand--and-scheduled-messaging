import Mail from '../lib/Mail';

const mail = new Mail();

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { to, subject, forgotPasswordTemplate } = data;

    await mail.sendMail(to, {}, subject, {
      file: forgotPasswordTemplate,
      variables: {
        link: 'Link',
        name: to.name,
        logo: process.env.DEFAULT_LOGO_URL,
      },
    });
  },
};
