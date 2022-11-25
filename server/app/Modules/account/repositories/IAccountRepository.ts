import { UserMapper } from "@modules/user/mapper/UserMapper";
import { IAccount, IUser } from "types/entities";

export interface IAccountRepository {
  // exists(email: string): Promise<boolean>
  // save(user: User): Promise<void>
  update(account: IAccount): Promise<IAccount>
  findById(accountId: string): Promise<IAccount>
  create(account: IAccount): Promise<IAccount>
  createWithUser(user: IUser, account: IAccount, userMapper: UserMapper): Promise<IAccount>
}
