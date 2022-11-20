import cors from 'cors'
import express from 'express';
import {createServer} from 'http'
import { router } from './Routes';
import {port} from '@config/auth'
import { UnauthorizedException } from './../../../../types/errors/UnauthorizedException';
import { ErrorException } from 'types/errors';

const api = express();
const http = createServer(api)
const currentPort = port || 3333

api.use(express.urlencoded({ extended : true }))
api.use(express.json());
api.use(cors())
api.use(router);
api.set('port', currentPort);


api.get('/',(req,res)=>{
  try{
      throw new UnauthorizedException('aaaaa')
    return res.status(200).json({
      message: 'deu certo'
    })
  }catch(e){
    if(e instanceof ErrorException)
      return res.status(e.code).json({
        type: e.type,
        message: e.message
      })
    else{
      return res.status(700).json({
        message: e.message
      })
    }
  }
  
})



http.listen( currentPort, () => {
  console.log(`Server running on port ${currentPort}`);
});