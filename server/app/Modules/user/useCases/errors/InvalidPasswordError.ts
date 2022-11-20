import { BadRequestException } from "types/errors"
import { InvalidPasswordErrorsEnum } from "types/enums"


export class InvalidPasswordError extends BadRequestException{
  constructor(errors:InvalidPasswordErrorsEnum[]) {
    const message = errors.map(x=>InvalidPasswordErrorsEnum[x]).join(', ')
    super(`The password must have between ${message}.`)
    this.name = 'InvalidPasswordError'
  }
}