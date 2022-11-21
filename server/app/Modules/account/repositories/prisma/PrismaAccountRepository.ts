
import { IAccount } from 'types/entities';
import { IAccountRepository} from '../IAccountRepository'
import { prisma } from '@infra/prisma';
import { AccountAlreadyExistError } from '@modules/user/useCases/RegisterUser/errors';
import { AccountMapper } from './../../mapper/AccountMapper';

export class AccountRepository  implements IAccountRepository{
  constructor(private mapper: AccountMapper){}
  async create(account: IAccount): Promise<IAccount> {
    const exist = await prisma.account.findUnique({
      where: { id: account.id },
    })
    if(exist){
      throw new AccountAlreadyExistError(account.id);
    }
    const data = await this.mapper.toModel(account)

     const current =  await prisma.account.create({ data:{
        balance: data.balance
     } });
     return this.mapper.toEntity(current)
  }

}