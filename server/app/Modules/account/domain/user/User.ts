import { Entity } from "app/core/domain/Entity"
import { IUser } from "types/entities"
import { Password } from '@modules/account/domain/user/Password';


export class Users extends Entity<IUser> {
    get username(): string {
      return this.props.username
    }
    get password(): Password {
      return this.props.password
    }
    get accountId(): string {
        return this._prop.accountId
    }
    get account() {
      return this._prop.account
    }
    get createdAt():Date {
      return this._createdAt
    }
  get updatedAt(): Date {
      return this._updatedAt
  }

  set createdAt(date: Date){
    this._createdAt = date
  }
  set updatedAt(date: Date){
    this._updatedAt = date
  }

  constructor(user: IUser) {
    super(user)
  }
}
