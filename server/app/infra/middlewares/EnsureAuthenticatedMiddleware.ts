import { decode } from 'jsonwebtoken'
import { Middleware } from "@core/infra/Middleware";
import { AuthenticatedMiddlewareRequest } from "types/DTOs";
import { HttpResponse, ok } from "types/HttpResponses";
import { AuthenticatedUserSessionsData, AuthTokenPayload } from 'types/DTOs/userDTO';
import { AccessDeniedError } from '@modules/user/useCases/AuthenticateUser/errors';



export class EnsureAuthenticatedMiddleware<T> implements Middleware {
  handle(request: AuthenticatedMiddlewareRequest): HttpResponse{
    const { accessToken,authorization } = request
    const token = accessToken || authorization.split(' ')[1]
   
    if (token) {
        const decoded = decode(token) as AuthTokenPayload
        const [userId, username] = decoded.sub.split('@')
        return ok<AuthenticatedUserSessionsData>({
          inSessionUserId: userId,
          InSessionUsername: username,
          token
        })
    }

    throw new AccessDeniedError();
  }
}