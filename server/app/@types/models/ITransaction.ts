import { IEntity } from ".";
import { IAccount } from './IAccount';

export interface ITransaction extends IEntity{
  value: number
  debitedAccountId: string
  debitedAccount?:    IAccount  
  creditedAccount?:   IAccount
}