import { IEntity } from "."
import { IAccount } from "./IAccount"

export interface IUser extends IEntity{
  username: string
  password: string
  accountId: string 
  account:   IAccount
  createdAt: Date
}