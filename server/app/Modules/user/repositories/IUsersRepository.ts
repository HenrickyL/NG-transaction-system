import { Users } from "../domain/Users";
import { IUser } from 'types/entities';

export interface IUsersRepository {
  // exists(email: string): Promise<boolean>
  // save(user: User): Promise<void>
  create(user: IUser): Promise<IUser>
  findByUsername(username: string): Promise<IUser>
}
