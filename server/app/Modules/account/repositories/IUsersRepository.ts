import { Users } from "../domain/user/User"

export interface IUsersRepository {
  // exists(email: string): Promise<boolean>
  // findByEmail(email: string): Promise<User>
  // save(user: User): Promise<void>
  create(user: Users): Promise<Users>
}
