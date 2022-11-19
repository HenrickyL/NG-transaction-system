import cors from 'cors'
import express from 'express';
import { router } from './routes';
import {port} from '@config/auth'
const server = express();

server.use(
  cors({
    exposedHeaders: ['x-total-count', 'Content-Type', 'Content-Length'],
  })
)
server.use(express.json());
server.use(router);
const currentPort = port || 3334
server.listen( currentPort, () => {
  console.log(`Server running on http://localhost:${currentPort}`);
});