import { IAccount } from "./IAccount"

export interface IUser{
  username: string
  password: string
  accountId: string 
  account:   IAccount
  createdAt: Date
}