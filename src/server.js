import 'dotenv/config';
import express from 'express';
import path from 'path';

import routes from './routes';
import './app/cron/index';

const tmpFolder = path.resolve(__dirname, 'public');

const app = express();

app.use(express.json());
app.use('/files', express.static(tmpFolder));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server is running!');
});
