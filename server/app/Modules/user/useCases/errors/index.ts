import { BadRequestException } from "types/errors"

export class InvalidUsernameLengthError extends BadRequestException {
  constructor(username: string) {
    super(`The username '${username}' must have at least 3 characters.`)
    this.name = 'InvalidUsernameLengthError'
  }
}