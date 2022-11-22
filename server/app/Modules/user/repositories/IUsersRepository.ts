import { IUser } from 'types/entities';

export interface IUsersRepository {
  // exists(email: string): Promise<boolean>
  updateById(id: string, user: IUser): Promise<IUser>
  create(user: IUser): Promise<IUser>
  findByUsername(username: string): Promise<IUser>
  findById(id: string): Promise<IUser>
}
