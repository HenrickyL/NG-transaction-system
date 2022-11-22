import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"
import { AuthenticateUser } from "app/useCases/AuthenticateUser/AuthenticateUser"
import { UserMapper } from '@modules/user/mapper/UserMapper';
import AuthenticateUserController from "app/useCases/AuthenticateUser/AuthenticateUserController";
import { IController } from 'app/core/infra/IController';

export function makeAuthenticateUserController(): IController {
  const userMapper = new UserMapper(); 
  const prismaUsersRepository = new PrismaUsersRepository(userMapper)
  const authenticateUser = new AuthenticateUser(prismaUsersRepository)
  const authenticateUserController = new AuthenticateUserController(
    authenticateUser
  )
  return authenticateUserController
}
