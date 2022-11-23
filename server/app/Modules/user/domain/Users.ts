import { Entity } from "app/core/domain/Entity"
import { IUser } from "types/entities"
import { Password } from "./Password"


export class Users extends Entity<IUser>{
  protected _username: string
  protected _password: Password
  protected _accountId?: string
  protected _account?: any

  get username(): string {
    return this._username
  }
  get password(): Password {
    return this._password
  }
  get accountId(): string {
      return this._accountId
  }
  get account() {
    return this._account
  }


  set accountId(accountId: string){
    this._accountId = accountId
  }
  constructor(props: IUser) {
    super(props)
    this._username = props.username
    this._password = props.password
    this._accountId = props.accountId
    this._account = props.account
  }
}
