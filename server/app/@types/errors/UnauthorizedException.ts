import { ErrorException } from '.';
export class UnauthorizedException extends ErrorException {
  constructor(param: string) {
    super(`Unauthorized Exception."${param}".`)
    this.name = 'UnauthorizedException'
    this._code = 401
  }
}