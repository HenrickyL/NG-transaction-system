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
    const { accessToken,authorization } = request
    const token = accessToken || authorization.split(' ')[1]
   
    if (token) {
      try{
        console.log('.')
        const decoded = decode(token) as DecodedJwt
        
        return ok<AuthData>({
          userId: decoded.sub,
          token
        })
      }catch(e){
        console.log(e)
      }
    }

    throw new AccessDeniedError();
  }
}