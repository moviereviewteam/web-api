import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { errorHandler, responseFormatter } from './src/middlewares';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

app.use(responseFormatter);
app.use(errorHandler);

export default app;
