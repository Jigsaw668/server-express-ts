import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import coockieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(coockieSession({ keys: ['fdsfds'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listenning on port 3000')
}) 