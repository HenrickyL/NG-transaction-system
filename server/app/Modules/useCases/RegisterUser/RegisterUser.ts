import { Password } from "@modules/user/domain/Password";
import { Username } from "@modules/user/domain/Username";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { RegisterUserRequest, UserResponse } from "types/DTOs/userDTO";
import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { IAccountRepository } from './../../account/repositories/IAccountRepository';
import { IAccount, IUser } from "types/entities";


export class RegisterUser {
  constructor(
    private usersRepository: IUsersRepository,
    private accountRepository: IAccountRepository,
    private mapper: UserMapper
    ) {}

  async execute({username,password,}: RegisterUserRequest): Promise<UserResponse> 
  {
    console.log(' Register :')

    const usernameValid = Username.create(username)
    const passwordValid:Password = Password.create(password)

    const user: IUser ={
      username: usernameValid,
      password: passwordValid
    }
    const res = await this.usersRepository.create(user);
    const account:IAccount = {
      balance: 100
    }
    this.accountRepository.create(account)
    return this.mapper.toResponse(res)
  }
}