import { decode } from 'jsonwebtoken'
import { Middleware } from "@infra/http/factories/Middleware";
import { AuthenticatedMiddlewareRequest } from "types/DTOs";
import { HttpResponse, ok } from "types/HttpResponses";
import { UnauthorizedException } from 'types/errors';


type DecodedJwt = {
  sub: string
}
export class EnsureAuthenticatedMiddleware implements Middleware {
  handle(request: AuthenticatedMiddlewareRequest): Promise<HttpResponse<any>>{

    const { accessToken } = request

    if (accessToken) {
        const decoded = decode(accessToken) as DecodedJwt
        
        // return ok({ id: decoded.sub })
    }
    throw new UnauthorizedException("Invalid access token");
  }
}