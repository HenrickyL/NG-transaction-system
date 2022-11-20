import { ErrorException } from './Error';
export class BadRequestException extends ErrorException {
  constructor(param: string) {
    super(`Bad Request Exception."${param}".`)
    this.name = 'Bad Request Exception'
    this._code = 400
  }
}