import { InvalidJWTTokenError } from '@modules/user/useCases/AuthenticateUser/errors';
import { sign, verify } from 'jsonwebtoken'
import { AuthenticatedUserSessionSData } from 'types/DTOs/userDTO'
import { AuthTokenPayload } from 'types/DTOs/userDTO';
import {auth} from '@config/auth'
import { IUser } from 'types/entities/IUser.d';
export class JWT {
  public readonly userId: string
  public readonly token: string

  private constructor({ inSessionUserId: userId, token }: AuthenticatedUserSessionSData) {
    this.userId = userId
    this.token = token
  }


  static decodeToken(token: string):  AuthTokenPayload {
    try {
      const decoded = verify(token, auth.secretKey) as AuthTokenPayload
      return decoded
    } catch (err) {
      throw new InvalidJWTTokenError()
    }
  }
  static createFromJWT(token: string):  JWT {
    const jwtPayload = this.decodeToken(token)
    const jwt = new JWT({ token, inSessionUserId: jwtPayload.sub })
    return jwt
  }

  static signUser(user: IUser, payload?: Object): JWT {
    const token = sign(payload || {}, auth.secretKey, {
      subject: user.id,
      expiresIn: auth.expireIn,
    })
    const jwt = new JWT({ inSessionUserId: user.id, token })
    return jwt
  }
}