import { IController } from "@core/infra/IController";
import { TransactionMapper } from "@modules/transactions/mapper/TransactionMapper";
import { PrismaTransactionRepository } from "@modules/transactions/repositories/prisma/PrismaITransactionRepository";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository";
import { TransactionRequest, GetTransactionsResponse } from "types/DTOs/transactionDTO";
import { GetTransactions } from './../../../../Modules/account/UseCases/GetTransactions/GetTransactions';
import { GetTransactionsController } from './../../../../Modules/account/UseCases/GetTransactions/GetTransactionsController';

export function makeGetTransactionsController(): IController<TransactionRequest,GetTransactionsResponse> {
  const userMapper = new UserMapper()
  const transactionMapper = new TransactionMapper()
  const prismaUsersRepository = new PrismaUsersRepository(userMapper)
  const prismaTransactionRepository = new PrismaTransactionRepository(transactionMapper)
  const useCase = new GetTransactions(prismaUsersRepository, prismaTransactionRepository,transactionMapper);
  const controller = new GetTransactionsController(useCase)
  return controller
}
