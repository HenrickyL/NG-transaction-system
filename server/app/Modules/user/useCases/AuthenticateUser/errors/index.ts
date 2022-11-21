import { BadRequestException } from 'types/errors';

export class InvalidEmailOrPasswordError extends BadRequestException{
  constructor() {
    super(`Invalid username/password combination.`)
    this.name = 'InvalidEmailOrPasswordError'
  }
}