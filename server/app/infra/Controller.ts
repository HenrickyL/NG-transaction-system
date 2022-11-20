import { HttpResponse } from "app/_types/HttpResponses";

export abstract class Controller<T>{
  handle: (request: T) => Promise<HttpResponse<T>>
}

