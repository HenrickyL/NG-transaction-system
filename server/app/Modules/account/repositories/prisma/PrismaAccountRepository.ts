import { Accounts } from '@modules/account/domain/Accounts';
import { IAccount } from 'types/entities';

export interface IAccountRepository {
  // exists(email: string): Promise<boolean>
  // save(user: User): Promise<void>
  create(user: IAccount): Promise<Accounts>
}
