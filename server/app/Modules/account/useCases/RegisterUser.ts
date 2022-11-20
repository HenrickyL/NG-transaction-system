import { IUsersRepository } from "../repositories/IUsersRepository";
import {RegisterUserRequest} from 'types/DTOs'
import { User } from "../domain/user/User";
import { Username } from "../domain/user/Username";
import { Password } from "../domain/user/Password";


export class RegisterUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({username,password,}: RegisterUserRequest): Promise<User> 
  {
    username = Username.create(username)
    password = Password.create(password)

    const user = new User({
      username,
      password
    }) 
    return await this.usersRepository.create(user)
  }
}