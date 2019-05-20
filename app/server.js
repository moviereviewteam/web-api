import { createServer } from 'http';
import app from './app';

require('dotenv').config();

const port = process.env.PORT || 3000;
const server = createServer(app);
server.listen(port);

