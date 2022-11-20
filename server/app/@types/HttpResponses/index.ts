interface HttpResponse<T> {
  statusCode: number
  body: T | null
}


export{
  HttpResponse,
  ok,
  created,
  noContent
}

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