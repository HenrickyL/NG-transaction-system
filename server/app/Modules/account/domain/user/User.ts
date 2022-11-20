import { Entity } from "app/core/domain/Entity"
import { IUser } from "types/entities"
import { RegisterUserRequest } from 'types/DTOs';


export class User extends Entity<IUser> {
  get username() {
    return this.props.username
  }
  get password() {
    return this.props.password
  }

  constructor(props: IUser) {
    super(props)
  }
}
