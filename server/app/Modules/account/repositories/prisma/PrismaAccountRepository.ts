
import { IAccount } from 'types/entities';
import { IAccountRepository} from '../IAccountRepository'
import { prisma } from '@infra/prisma';
import { AccountMapper } from './../../mapper/AccountMapper';
import { AccountAlreadyExistError } from '@modules/user/useCases/RegisterUser/errors';
import { UserWithAccountNullError } from '@modules/account/UseCases/GetBalance/errors';

export class PrismaAccountRepository  implements IAccountRepository{
  constructor(private mapper: AccountMapper){}


  async findById(accountId: string): Promise<IAccount> {
    if(!accountId){
      throw new UserWithAccountNullError(accountId);
    }
    const account = await prisma.account.findUnique({
      where:{ id: accountId}
    })

    if(!account){
      throw new AccountAlreadyExistError(accountId)
    }
    return this.mapper.toEntity(account)
  }

 
  
  
  async create(account: IAccount): Promise<IAccount> {
    if(account.id){
      const exist = await prisma.account.findUnique({
        where: { id: account.id },
      })
      if(exist){
        throw new AccountAlreadyExistError(account.id);
      }
    }
    
    const current =  await prisma.account.create({ data:{
      balance: account.balance
    } });
    return this.mapper.toEntity(current)
  }

}
