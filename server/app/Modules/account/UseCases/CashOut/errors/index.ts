import { BadRequestException, ErrorException } from "types/errors"

export class CashOutValueError extends BadRequestException {
  constructor(value: number) {
    super(`value '${value}' cannot be negative or null.`)
    this.name = 'CashOutValueError'
  }
}

export class CashOutInsufficientBalanceError extends BadRequestException {
  constructor(value: number) {
    super(`Current balance insufficient for the amount ${value}'.`)
    this.name = 'CashOutInsufficientBalanceError'
  }
}


export class CashOutInternalError extends ErrorException {
  constructor(cashOutUsername: string) {
    super(`Internal Error. Something went wrong when transferring to the '${cashOutUsername}' account, we refund the original amount..`)
    this.name = 'CashOutInternalError'
  }
}

export class CashOutYourselfAccountError extends BadRequestException {
  constructor() {
    super(`Unable to cash out to yourself.`)
    this.name = 'CashOutYourselfAccountError'
  }
}