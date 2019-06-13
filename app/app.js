import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { errorHandler, responseFormatter } from './src/middlewares';

const cors = require('cors');

const app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  
    app.options('*', () => {
      // allowed XHR methods
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.send();
    });
  });
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/', routes);
app.use(responseFormatter);
app.use(errorHandler);

export default app;
