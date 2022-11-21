
export abstract class ErrorException extends Error {
  protected _code : number
  constructor(param?: string) {
    super(param || `Internal Server Error.`)
    this.name = 'Internal Server Error'
    this._code = 500
  }
  get statusCode():number{
    return this._code
  }
  get type():string{
    return this.name
  }
}

export class BadRequestException extends ErrorException {
  constructor(param: string) {
    super(param || `Bad Request Exception.`)
    this.name = 'Bad Request Exception'
    this._code = 400
  }
}

export class NotFountException extends ErrorException {
  constructor(param: string) {
    super(param || `Not Found Exception.`)
    this.name = 'NotFoundException'
    this._code = 404
  }
}

export class UnauthorizedException extends ErrorException {
  constructor(param: string) {
    super(param || `Unauthorized Exception.`)
    this.name = 'UnauthorizedException'
    this._code = 401
  }
}