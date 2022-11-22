import { decode } from 'jsonwebtoken'
import { Middleware } from "@core/infra/Middleware";
import { AuthenticatedMiddlewareRequest } from "types/DTOs";
import { HttpResponse, ok } from "types/HttpResponses";
import { AuthData } from 'types/DTOs/userDTO';
import { AccessDeniedError } from '@modules/user/useCases/AuthenticateUser/errors';


type DecodedJwt = {
  sub: string
}
export class EnsureAuthenticatedMiddleware <T>implements Middleware {
  handle(request: AuthenticatedMiddlewareRequest): HttpResponse{
    const { accessToken,authorization } = request
    const token = accessToken || authorization.split(' ')[1]
   
    if (token) {
        const decoded = decode(token) as DecodedJwt
        
        return ok<AuthData>({
          userId: decoded.sub,
          token
        })
    }

    throw new AccessDeniedError();
  }
}