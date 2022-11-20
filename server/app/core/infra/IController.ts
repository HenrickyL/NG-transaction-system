import {HttpResponse} from 'types/HttpResponses'


export interface IController<T = any>{
  handle: (request: T) => Promise<HttpResponse<T>>
}

