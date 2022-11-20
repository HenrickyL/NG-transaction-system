import { IUsersRepository } from "../../repositories/IUsersRepository";
import {RegisterUserRequest} from 'types/DTOs'
import { Users } from "../../domain/user/User";
import { Username } from "../../domain/user/Username";
import { Password } from "../../domain/user/Password";


export class RegisterUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({username,password,}: RegisterUserRequest): Promise<Users> 
  {
    const usernameValid = Username.create(username)
    const passwordValid:Password = Password.create(password)

    const user = new Users({
      username: usernameValid,
      password: passwordValid
    }) 
    return await this.usersRepository.create(user)
  }
}