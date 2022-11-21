import { IUser } from './IUser';
import {IEntity} from '.'
export interface IAccount extends IEntity{
  balance: number
  user?: IUser
}