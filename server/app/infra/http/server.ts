import cors from 'cors'
import express from 'express';
import { router } from './routes';

const server = express();

server.use(
  cors({
    exposedHeaders: ['x-total-count', 'Content-Type', 'Content-Length'],
  })
)
server.use(express.json());
server.use(router);
const port = process.env.PORT || 3334
server.listen( port, () => {
  console.log(`Server running on http://localhost:${port}`);
});