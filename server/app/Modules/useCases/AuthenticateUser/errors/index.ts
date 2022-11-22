import { BadRequestException } from 'types/errors';

export class InvalidEmailOrPasswordError extends BadRequestException{
  constructor() {
    super(`Invalid username/password combination.`)
    this.name = 'InvalidEmailOrPasswordError'
  }
}

export class InvalidJWTTokenError extends BadRequestException {
  constructor() {
    super(`The JWT token is invalid.`)
    this.name = 'InvalidJWTTokenError'
  }
}