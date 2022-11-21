
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"

import { IController } from "app/core/infra/IController"
import { UserMapper } from '@modules/user/mapper/UserMapper';
import { RegisterUser} from '@modules/useCases/RegisterUser/RegisterUser'
import { PrismaAccountRepository} from "@modules/account/repositories/prisma/PrismaAccountRepository";
import { AccountMapper } from "@modules/account/mapper/AccountMapper";
import { RegisterUserController } from "@modules/useCases/RegisterUser/RegisterUserController";

export function makeRegisterUserController(): IController {
  console.log(' makeController :')
  const userMapper = new UserMapper()
  const accountMapper = new AccountMapper()

  const prismaUsersRepository = new PrismaUsersRepository(userMapper)
  const prismaAccountRepository = new PrismaAccountRepository(accountMapper)

  const registerUser = new RegisterUser(prismaUsersRepository,prismaAccountRepository,userMapper)
  const registerUserController = new RegisterUserController(
    registerUser
  )
  return registerUserController
}