import { PrismaUsersRepository } from "@modules/account/repositories/prisma/PrismaUserRepository"
import { RegisterUser } from "@modules/account/useCases/RegisterUser/RegisterUser"
import { RegisterUserController } from "@modules/account/useCases/RegisterUser/RegisterUserController"
import { IController } from "app/core/infra/IController"

export function makeRegisterUserController(): IController {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUser = new RegisterUser(prismaUsersRepository)
  
  const registerUserController = new RegisterUserController(
    registerUser
  )

  return registerUserController
}