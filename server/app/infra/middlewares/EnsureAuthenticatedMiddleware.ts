import { decode } from 'jsonwebtoken'
import { Middleware } from "@core/infra/Middleware";
import { AuthenticatedMiddlewareRequest } from "types/DTOs";
import { HttpResponse, ok } from "types/HttpResponses";
import { UnauthorizedException } from 'types/errors';
import { AuthData } from 'types/DTOs/userDTO';


type DecodedJwt = {
  sub: string
}
export class EnsureAuthenticatedMiddleware <T>implements Middleware {
  handle(request: AuthenticatedMiddlewareRequest): Promise<HttpResponse<any>>{

    const { accessToken } = request

    if (accessToken) {
        const decoded = decode(accessToken) as DecodedJwt
        
        ok<AuthData>({
          userId: decoded.sub,
          token: accessToken
        })
    }
    throw new UnauthorizedException("Invalid access token");
  }
}