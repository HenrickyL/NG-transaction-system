import {HttpResponse} from 'types/HttpResponses'
export abstract class Controller<T>{
  handle: (request: T) => Promise<HttpResponse<T>>
}

