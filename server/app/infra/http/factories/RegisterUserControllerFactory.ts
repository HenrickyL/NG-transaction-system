
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"
import { RegisterUser } from "@modules/user/useCases/RegisterUser/RegisterUser"
import { RegisterUserController } from "@modules/user/useCases/RegisterUser/RegisterUserController"
import { IController } from "app/core/infra/IController"

export function makeRegisterUserController(): IController {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUser = new RegisterUser(prismaUsersRepository)
  
  const registerUserController = new RegisterUserController(
    registerUser
  )

  return registerUserController
}