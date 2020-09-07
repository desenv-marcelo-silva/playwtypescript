import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';

import './controller/LoginController';
import './controller/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sadfhasçdfhaç'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listen on port 3000!');
});
