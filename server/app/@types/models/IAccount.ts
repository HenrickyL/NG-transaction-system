import { IEntity } from ".";
import { IUser } from 'app/@types/models';

export interface IAccount extends IEntity{
  balance: number
  user?: IUser
}