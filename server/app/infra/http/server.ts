import cors from 'cors'
import express from 'express';
import {createServer} from 'http'
import { router } from './Routes';
import {auth} from '@config/auth'

const api = express();
const http = createServer(api)
const port = auth.port || 5000

api.use(express.urlencoded({ extended : true }))
api.use(express.json());
api.use(cors())
api.use(router);
api.set('port', port);

api.get('/', (req,res)=>{
  return res.status(200).json({
    status: 'online'
  })
})

http.listen( port, () => {
  console.log(`Server running on port ${port}`);
});