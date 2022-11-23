import { BadRequestException, ErrorException } from "types/errors"
import { InvalidPasswordErrorsEnum } from "types/enums"
import { NotFountException } from './../../../../../../types/errors/index';

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

export class UserNotFound extends NotFountException {
  constructor(id: string) {
    super(`The user with id '${id}' not found.`)
    this.name = 'UserNotFound'
  }
}

export class AccountAlreadyExistError extends ErrorException {
  constructor(id: string) {
    super(`The Account with id '${id}' already exists.`)
    this.name = 'AccountAlreadyExistError'
  }
}

export class PasswordAccessNotAllowed extends ErrorException {
  constructor() {
    super(`Password access not allowed.`)
    this.name = 'PasswordAccessNotAllowed'
  }
}



