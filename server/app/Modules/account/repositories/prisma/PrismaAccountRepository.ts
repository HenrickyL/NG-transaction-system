
import { IAccount, IUser } from 'types/entities';
import { IAccountRepository} from '../IAccountRepository'
import { prisma } from '@infra/prisma';
import { AccountMapper } from './../../mapper/AccountMapper';
import { AccountAlreadyExistError } from '@modules/user/useCases/RegisterUser/errors';
import { UserWithAccountNullError } from '@modules/account/UseCases/GetBalance/errors';
import { UserMapper } from '@modules/user/mapper/UserMapper';

export class PrismaAccountRepository  implements IAccountRepository{
  constructor(private mapper: AccountMapper){}


  async update(account: IAccount): Promise<IAccount> {
    var current = await prisma.account.update({
      where:{ id: account.id},
      data:{
        balance: account.balance,
      }
    })
    return this.mapper.toEntity(current);
  }


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
    const current =  await prisma.account.create({ data:{
      balance: account.balance
    } });
    return this.mapper.toEntity(current)
  }

  async createWithUser(user: IUser, account: IAccount, userMapper: UserMapper): Promise<IAccount> {
    const userData = await userMapper.toModelAsync(user)
    const current =  await prisma.account.create({ data:{
      balance: account.balance,
      user:{
        create:{
          username: userData.username,
          password: userData.password,
        }
      }
    } });
    return this.mapper.toEntity(current)
  }

}
