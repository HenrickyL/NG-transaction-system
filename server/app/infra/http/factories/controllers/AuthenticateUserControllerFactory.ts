import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"
import { AuthenticateUser } from "@modules/user/useCases/AuthenticateUser/AuthenticateUser"
import { UserMapper } from '@modules/user/mapper/UserMapper';
import AuthenticateUserController from "@modules/user/useCases/AuthenticateUser/AuthenticateUserController";
import { IController } from 'app/core/infra/IController';
import { AuthenticateUserRequest } from "types/DTOs/userDTO";
import { AuthenticatedResponse } from "types/DTOs";

export function makeAuthenticateUserController(): IController<AuthenticateUserRequest, AuthenticatedResponse> {
  const userMapper = new UserMapper(); 
  const prismaUsersRepository = new PrismaUsersRepository(userMapper)
  const authenticateUser = new AuthenticateUser(prismaUsersRepository)
  const authenticateUserController = new AuthenticateUserController(
    authenticateUser
  )
  return authenticateUserController
}
