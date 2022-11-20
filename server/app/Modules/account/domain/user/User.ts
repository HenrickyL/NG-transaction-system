import { Entity } from "app/core/domain/Entity"
import { IUser } from "types/entities"


export class Users extends Entity<IUser> {
  get username() {
    return this.props.username
  }
  get password() {
    return this.props.password
  }

  constructor(user: IUser) {
    super(user)
  }
}
