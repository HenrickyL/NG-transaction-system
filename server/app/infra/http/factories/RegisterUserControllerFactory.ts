
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"
import { RegisterUser } from "@modules/user/useCases/RegisterUser/RegisterUser"
import { RegisterUserController } from "@modules/user/useCases/RegisterUser/RegisterUserController"
import { IController } from "app/core/infra/IController"
import { UserMapper } from '@modules/user/mapper/UserMapper';

export function makeRegisterUserController(): IController {
  const prismaUsersRepository = new PrismaUsersRepository()
  const mapper = new UserMapper()
  const registerUser = new RegisterUser(prismaUsersRepository,mapper)
  const registerUserController = new RegisterUserController(
    registerUser
  )

  return registerUserController
}