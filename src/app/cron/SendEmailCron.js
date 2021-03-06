import cron from 'node-cron';
import SendMailService from '../service/SendMailService';

const sendMailService = new SendMailService();

class SendMailCron {
  async execute() {
    cron.schedule('0 0 13 */1 * *', async () => {
      await sendMailService.execute();
    });
  }
}

export default SendMailCron;
