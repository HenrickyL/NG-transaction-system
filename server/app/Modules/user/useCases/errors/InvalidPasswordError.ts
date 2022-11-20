import { BadRequestException } from "types/errors"

// enum InvalidPasswordErrosEnum{

// }


export class InvalidPasswordError extends BadRequestException{
  constructor() {
    super(`The password must have between 6 and 255 characters.`)
    this.name = 'InvalidPasswordLengthError'
  }
}