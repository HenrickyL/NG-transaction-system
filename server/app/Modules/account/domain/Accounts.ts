import { Entity } from "app/core/domain/Entity"
import { IUser } from "types/entities"
import { IAccount } from 'types/entities';

export class Accounts extends Entity<IAccount>{
  protected _balance: number
  protected _user?: IUser

  get id(): string {
      return this._id
  }
  get balance(): number {
    return this._balance
  }

  constructor(props: IAccount) {
    super(props)
    this._balance =props.balance
    this._user = props.user
  }
}
