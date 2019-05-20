import express from 'express';
import routes from './routes';
import { responseFormatter } from './src/middlewares';

const app = express();

app.use('/', routes);

app.use(responseFormatter);

export default app;
