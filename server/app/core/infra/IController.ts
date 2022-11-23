import {HttpResponse} from 'types/HttpResponses'


export interface IController<Req,Res>{
  handle: (request: Req) => Promise<HttpResponse<Res>>
}

