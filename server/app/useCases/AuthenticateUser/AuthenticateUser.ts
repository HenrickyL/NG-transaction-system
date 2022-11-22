import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { AuthenticatedResponse } from "types/DTOs";
import { AuthenticateUserRequest } from "types/DTOs/userDTO";
import { InvalidEmailOrPasswordError } from "./errors";

export class AuthenticateUser {
  // constructor(private usersRepository: IUsersRepository) {}

  // async execute({
  //   username,
  //   password,
  // }: AuthenticateUserRequest): Promise<AuthenticatedResponse> {
  //   const user = await this.usersRepository.findByUsername(username)

  //   if (!user) {
  //     throw new InvalidEmailOrPasswordError()
  //   }

  //   const isPasswordValid = await user.password.comparePassword(password)

  //   if (isPasswordValid === false) {
  //     throw new InvalidEmailOrPasswordError()
  //   }

  //   const { token } = JWT.signUser(user)

  //   return token
  // }
}