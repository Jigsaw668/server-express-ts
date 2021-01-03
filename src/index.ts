import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import coockieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(coockieSession({ keys: ['fdsfds'] }));
app.use(router);

app.listen(3000, () => {
  console.log('Listenning on port 3000')
}) 