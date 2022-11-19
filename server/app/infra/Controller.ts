import { HttpResponse } from "app/@types/responses";

export abstract class Controller<T>{
  handle: (request: T) => Promise<HttpResponse<T>>
}

