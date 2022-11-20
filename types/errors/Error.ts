export class ErrorException extends Error {
  protected _code : number
  constructor(param?: string) {
    super(param || `Internal Server Error.`)
    this.name = 'Internal Server Error'
    this._code = 500
  }
  get code():number{
    return this._code
  }
  get type():string{
    return this.name
  }
}