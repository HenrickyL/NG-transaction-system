export class ErrorException extends Error {
  protected _code : Number
  constructor(param: string) {
    super(`Internal Server Error."${param}".`)
    this.name = 'Internal Server Error'
    this._code = 500
  }
  get code(){
    return this._code
  }
}