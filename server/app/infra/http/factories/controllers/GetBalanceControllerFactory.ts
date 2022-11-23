import { IController } from "@core/infra/IController"
import { AccountMapper } from "@modules/account/mapper/AccountMapper"
import { PrismaAccountRepository } from "@modules/account/repositories/prisma/PrismaAccountRepository"
import { UserMapper } from "@modules/user/mapper/UserMapper"
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"
import { AccountGetBalanceRequest, AccountResponse } from "types/DTOs/accountDTO"
import { GetBalance } from './../../../../Modules/account/UseCases/GetBalance/GetBalance';
import { GetBalanceController } from './../../../../Modules/account/UseCases/GetBalance/GetBalanceController';

export function makeGetBalanceController(): IController<AccountGetBalanceRequest,AccountResponse> {
  const userMapper = new UserMapper()
  const accountMapper = new AccountMapper()

  const prismaUsersRepository = new PrismaUsersRepository(userMapper)
  const prismaAccountRepository = new PrismaAccountRepository(accountMapper)

  const getBalance = new GetBalance(prismaUsersRepository,prismaAccountRepository,accountMapper)
  const getBalanceController = new GetBalanceController(
    getBalance
  )
  return getBalanceController
}