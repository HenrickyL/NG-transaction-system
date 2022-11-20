import { Entity } from "app/core/domain/Entity"
import { IUser } from "types/entities"


export class User extends Entity<IUser> {
  get username() {
    return this.props.username
  }
  get password() {
    return this.props.password
  }

  private constructor(props: IUser) {
    super(props)
  }

}
