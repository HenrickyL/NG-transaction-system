import { IAccount } from './IAccount';

export interface ITransaction{
  value: number
  debitedAccountId: string
  debitedAccount?:    IAccount  
  creditedAccount?:   IAccount
}