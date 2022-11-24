import { ErrorException } from "types/errors"

export class UserWithAccountNullError extends ErrorException {
  constructor(id: string) {
    super(`The user with id '${id}' with accountId null.`)
    this.name = 'UserWithAccountNullError'
  }
}

export class GetBalanceInternalError extends ErrorException {
  constructor(data: any) {
    super(`Get Balance Internal Error.`,data)
    this.name = 'GetBalanceInternalError'
  }
}