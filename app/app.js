import express from 'express';
import routes from './routes';
import { errorHandler, responseFormatter } from './src/middlewares';

const app = express();

app.use('/', routes);

app.use(responseFormatter);
app.use(errorHandler);

export default app;
