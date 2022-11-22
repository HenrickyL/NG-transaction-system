import { decode } from 'jsonwebtoken'
import { Middleware } from "@core/infra/Middleware";
import { AuthenticatedMiddlewareRequest } from "types/DTOs";
import { HttpResponse, ok } from "types/HttpResponses";
import { AuthData } from 'types/DTOs/userDTO';
import { AccessDeniedError } from 'app/useCases/AuthenticateUser/errors';


type DecodedJwt = {
  sub: string
}
export class EnsureAuthenticatedMiddleware <T>implements Middleware {
  handle(request: AuthenticatedMiddlewareRequest): HttpResponse{
    const { authorization } = request
    const accessToken = authorization.split(' ')[1]
    console.log({
      authorization,
      accessToken
    })
    if (accessToken) {
      try{
        console.log('.')
        const decoded = decode(accessToken) as DecodedJwt
        
        return ok<AuthData>({
          userId: decoded.sub,
          token: accessToken
        })
      }catch(e){
        console.log(e)
      }
    }

    throw new AccessDeniedError();
  }
}