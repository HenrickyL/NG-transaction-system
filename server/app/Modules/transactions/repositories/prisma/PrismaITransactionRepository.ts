import { ITransaction } from 'types/entities';
import { ITransactionRepository } from './../ITransactionRepository';
import { prisma } from './../../../../infra/prisma/index';
import { TransactionMapper } from '@modules/transactions/mapper/TransactionMapper';
export class PrismaTransactionRepository implements ITransactionRepository{

  constructor(private mapper: TransactionMapper) {}

  async findAllByAccountId(accountId: string, isCredited?: boolean): Promise<ITransaction[]> {
    const query = isCredited? {creditedAccountId: accountId}:{debitedAccountId: accountId}

    const transactions = await prisma.transaction.findMany({
      where:query,
      orderBy:{
        createdAt: 'desc'
      }
    })
    return transactions.map(x=>this.mapper.toEntity(x))
  }

  async create(data: ITransaction): Promise<ITransaction> {
    const transaction = await prisma.transaction.create({
      data:{
        value: data.value,
        creditedAccountId: data.creditedAccountId,
        debitedAccountId: data.debitedAccountId,
      }
    })
    return this.mapper.toEntity(transaction)
  }


}