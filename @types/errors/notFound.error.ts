import { ErrorException } from './error';
export class NotFountException extends ErrorException {
  constructor(param: string) {
    super(`Not Found Exception."${param}".`)
    this.name = 'NotFoundException'
    this._code = 404
  }
}