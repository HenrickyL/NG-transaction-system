import { IMapper } from '@core/infra/IMapper';
import { Transaction } from '@prisma/client';
import { TransactionResponse } from 'types/DTOs/transactionDTO';
import { ITransaction } from 'types/entities/ITransaction.d';

export class AccountMapper implements IMapper<ITransaction, Transaction, TransactionResponse>{
  toEntity(model: Transaction): ITransaction {
    return {
      id: model.id,
      value: model.value,
      creditedAccountId: model.creditedAccountId,
      debitedAccountId: model.debitedAccountId,
      createdAt: model.createdAt
    }
  }
  toModel(entity: ITransaction): Transaction {
    return {
      id: entity.id,
      value: entity.value,
      creditedAccountId: entity.creditedAccountId,
      debitedAccountId: entity.debitedAccountId,
      createdAt: entity.createdAt
    }
  }

  toResponse(entity: ITransaction): TransactionResponse {
    return {
      id: entity.id,
      value: entity.value,
      creditedAccountId: entity.creditedAccountId,
      debitedAccountId: entity.debitedAccountId
    }
  }
}