import { IUser } from './IUser';
import { IAccount } from './IAccount';
import { ITransaction } from './ITransaction';


interface IEntity{
  id: string
  createdAt: Date
  updatedAt?: Date
}

export {
  IEntity,
  IUser,
  IAccount,
  ITransaction
}