import { IUser } from 'types/entities';

export interface IUsersRepository {
  validateUsername(username: string): Promise<void>
  validateUsernameNotExist(username: string): Promise<void>
  validateId(id: string): Promise<void>
  update(user: IUser): Promise<IUser>
  create(user: IUser): Promise<IUser>
  findByUsername(username: string): Promise<IUser>
  findById(id: string): Promise<IUser>
}
