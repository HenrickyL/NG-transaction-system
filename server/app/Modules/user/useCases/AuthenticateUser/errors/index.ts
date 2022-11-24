import { BadRequestException, UnauthorizedException } from 'types/errors';
import { ErrorException } from 'types/errors';

export class InvalidUsernameOrPasswordError extends BadRequestException{
  constructor() {
    super(`Invalid username/password combination.`)
    this.name = 'InvalidUsernameOrPasswordError'
  }
}

export class InvalidJWTTokenError extends BadRequestException {
  constructor() {
    super(`The JWT token is invalid.`)
    this.name = 'InvalidJWTTokenError'
  }
}

export class AccessDeniedError extends UnauthorizedException {
  constructor() {
    super(`Access denied.`)
    this.name = 'AccessDeniedError'
  }
}

export class UnPermissionError extends UnauthorizedException {
  constructor() {
    super(`the user does not have permission for this action.`)
    this.name = 'UnPermissionError'
  }
}
