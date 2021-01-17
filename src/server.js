import 'dotenv/config';
const cron = require('node-cron');
import express from 'express';
import path from 'path';

import routes from './routes';
const tmpFolder = path.resolve(__dirname, 'public');

const app = express();

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});

app.use(express.json());
app.use('/files', express.static(tmpFolder));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server is running!');
});
