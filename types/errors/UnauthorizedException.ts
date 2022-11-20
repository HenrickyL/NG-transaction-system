import { ErrorException } from '.';
export class UnauthorizedException extends ErrorException {
  constructor(param: string) {
    super(param || `Unauthorized Exception.`)
    this.name = 'UnauthorizedException'
    this._code = 401
  }
}