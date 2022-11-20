import { Password } from "@modules/account/domain/user/Password"
import { IAccount } from "./IAccount"
import { IEntity } from './../../server/app/core/domain/IEntity';

export interface IUser extends IEntity{
  username: string
  password: Password
  accountId?: string 
  account?:   IAccount
}