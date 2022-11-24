import { ErrorException } from "types/errors"

export class UserWithAccountNullError extends ErrorException {
  constructor(id: string) {
    super(`The user with id '${id}' with accountId null.`)
    this.name = 'UserWithAccountNullError'
  }
}
