import {HttpResponse} from './HttpResponse '

function ok<T>(dto:T):HttpResponse<T>{
  return {
    statusCode:200,
    body:dto
  }
}
function created<T>(dto: T | null = null): HttpResponse<T> {
  return {
    statusCode: 201,
    body: dto,
  }
}

function noContent(): HttpResponse<undefined> {
  return {
    statusCode: 201,
    body: null,
  }
}



export{
  HttpResponse,
  ok,
  created,
  noContent
}