import cors from 'cors'
import express from 'express';
import {createServer} from 'http'
import { router } from './routes';
import {port} from '@config/auth'

const api = express();
const http = createServer(api)
const currentPort = port || 3333

api.use(express.urlencoded({ extended : true }))
api.use(express.json());
api.use(cors())
api.use(router);
api.set('port', currentPort);


api.get('/',(req,res)=>{
 return res.status(200).json({
    message: 'deu certo'
  })
})



http.listen( currentPort, () => {
  console.log(`Server running on port ${currentPort}`);
});