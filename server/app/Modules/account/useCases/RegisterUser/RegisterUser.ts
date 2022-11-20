import { IUsersRepository } from "../../repositories/IUsersRepository";
import {RegisterUserRequest} from 'types/DTOs'
import { Users } from "../../domain/user/User";
import { Username } from "../../domain/user/Username";
import { Password } from "../../domain/user/Password";
import { UserResponse } from 'types/DTOs/userDTO';
import { UserMapper } from "@modules/account/domain/user/mapper/UserMapper";


export class RegisterUser {
  constructor(
    private usersRepository: IUsersRepository
    ) {}

  async execute({username,password,}: RegisterUserRequest): Promise<UserResponse> 
  {
    const usernameValid = Username.create(username)
    const passwordValid:Password = Password.create(password)

    const user = new Users({
      username: usernameValid,
      password: passwordValid
    }) 
    const res = await this.usersRepository.create(user)
    return UserMapper.toResponse(res)
  }
}