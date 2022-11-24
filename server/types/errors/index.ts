
export abstract class ErrorException extends Error {
  protected _code : number
  protected _data? : any

  constructor(param?: string, data?: any) {
    super(param || `Internal Server Error.`)
    this.name = 'Internal Server Error'
    this._code = 500
    this._data = data
  }
  get statusCode():number{
    return this._code
  }
  get type():string{
    return this.name
  }
  get data():any {
    return this._data
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