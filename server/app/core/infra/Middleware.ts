import { HttpResponse } from "types/HttpResponses";

export interface Middleware<T = any, U = any> {
  handle: (httpRequest: T, httpBody?: U) => HttpResponse<T>

}
