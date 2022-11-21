import { BadRequestException } from "types/errors"
import { InvalidPasswordErrorsEnum } from "types/enums"

export class InvalidUsernameLengthError extends BadRequestException {
  constructor(username: string) {
    super(`The username '${username}' must have at least 3 characters.`)
    this.name = 'InvalidUsernameError'
  }
}

export class InvalidPasswordError extends BadRequestException{
  constructor(errors:InvalidPasswordErrorsEnum[]) {
    const message = errors.map(x=>InvalidPasswordErrorsEnum[x]).join(', ')
    super(`The password must have between ${message}.`)
    this.name = 'InvalidPasswordError'
  }
}


export class UserAlreadyExistError extends BadRequestException {
  constructor(username: string) {
    super(`The username '${username}' already exists.`)
    this.name = 'UserAlreadyExistError'
  }
}