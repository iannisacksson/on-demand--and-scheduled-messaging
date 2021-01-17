import SendMailService from '../service/SendMailService';

const sendMailService = new SendMailService();

export default class EmailController {
  constructor() {}

  async create(request, response) {
    await sendMailService.execute();

    response.status(204).json();
  }
}
