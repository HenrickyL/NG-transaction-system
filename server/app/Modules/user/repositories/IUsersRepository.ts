import { IUser } from 'types/entities';

export interface IUsersRepository {
  // exists(email: string): Promise<boolean>
  updateById(user: IUser): Promise<IUser>
  create(user: IUser): Promise<IUser>
  findByUsername(username: string): Promise<IUser>
  findById(id: string): Promise<IUser>
}
