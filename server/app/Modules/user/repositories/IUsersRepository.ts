import { Users } from "../domain/Users";

export interface IUsersRepository {
  // exists(email: string): Promise<boolean>
  // save(user: User): Promise<void>
  create(user: Users): Promise<Users>
  findByUsername(username: string): Promise<Users>
}
