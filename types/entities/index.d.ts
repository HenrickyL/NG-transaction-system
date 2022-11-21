import { IUser } from './IUser';
import { ITransaction } from './ITransaction';
import { IAccount } from './IAccount';


interface IEntity{
  id?: string
  createdAt?: Date;
  updatedAt?: Date;
}
export {
  IEntity,
  IUser,
  ITransaction,
  IAccount
}
