import { InvalidJWTTokenError } from '@modules/user/useCases/AuthenticateUser/errors';
import { sign, verify } from 'jsonwebtoken'
import { AuthenticatedUserSessionsData } from 'types/DTOs/userDTO'
import { AuthTokenPayload } from 'types/DTOs/userDTO';
import {auth} from '@config/auth'
import { IUser } from 'types/entities/IUser.d';
export class JWT {
  public readonly userId: string
  public readonly token: string

  private constructor({ inSessionUserId: userId, token }: AuthenticatedUserSessionsData) {
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
    const jwt = new JWT({ 
      token,
      InSessionUsername: jwtPayload.sub.username,
      inSessionUserId: jwtPayload.sub.userId })
    return jwt
  }

  static signUser(user: IUser, payload?: Object): JWT {
    const token = sign(payload || {}, auth.secretKey, {
      subject: {
        userId: user.id,
        username: user.username
      },
      expiresIn: auth.expireIn,
    })
    const jwt = new JWT({ 
      inSessionUserId: user.id,
      InSessionUsername: user.username,
      token })
    return jwt
  }
}