import { IAccount } from './IAccount';
import {IEntity} from '.'
export interface ITransaction extends IEntity{
  value: number
  debitedAccountId: string
  creditedAccountId: string
  debitedAccount?:    IAccount  
  creditedAccount?:   IAccount
}