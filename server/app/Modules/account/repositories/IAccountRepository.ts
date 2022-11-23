import { IAccount } from "types/entities";

export interface IAccountRepository {
  // exists(email: string): Promise<boolean>
  // save(user: User): Promise<void>
  findById(accountId: string): Promise<IAccount>
  create(account: IAccount): Promise<IAccount>
}
