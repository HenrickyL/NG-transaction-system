import { IController } from "@core/infra/IController";
import { AccountMapper } from "@modules/account/mapper/AccountMapper";
import { PrismaAccountRepository } from "@modules/account/repositories/prisma/PrismaAccountRepository";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository";
import { AccountCashOutRequest, AccountCashOutResponse } from "types/DTOs/accountDTO";
import { CashOut } from '@modules/account/UseCases/CashOut/CashOut';
import { CashOutController } from '@modules/account/UseCases/CashOut/CashOutController';
import { PrismaTransactionRepository } from '@modules/transactions/repositories/prisma/PrismaITransactionRepository';
import { TransactionMapper } from '@modules/transactions/mapper/TransactionMapper';

export function makeCashOutController(): IController<AccountCashOutRequest, AccountCashOutResponse> {
  const userMapper = new UserMapper()
  const accountMapper = new AccountMapper()
  const transactionMapper = new TransactionMapper()
  const prismaUsersRepository = new PrismaUsersRepository(userMapper)
  const prismaAccountRepository = new PrismaAccountRepository(accountMapper)
  const prismaTransactionRepository = new PrismaTransactionRepository(transactionMapper)

  const cashOut = new CashOut(prismaUsersRepository,prismaAccountRepository,prismaTransactionRepository)
  const cashOutController = new CashOutController(cashOut)
  return cashOutController
}