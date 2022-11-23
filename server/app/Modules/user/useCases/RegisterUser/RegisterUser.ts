import { Password } from "@modules/user/domain/Password";
import { Username } from "@modules/user/domain/Username";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { RegisterUserRequest, UserResponse } from "types/DTOs/userDTO";
import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { IAccountRepository } from '../../../account/repositories/IAccountRepository';
import { IAccount, IUser } from "types/entities";
import { IUseCase } from './../../../../core/infra/IUseCase';


export class RegisterUser implements IUseCase<RegisterUserRequest, UserResponse>{
  constructor(
    private usersRepository: IUsersRepository,
    private accountRepository: IAccountRepository,
    private mapper: UserMapper
    ) {}

  async execute({username,password,}: RegisterUserRequest): Promise<UserResponse> 
  {

    const usernameValid = Username.create(username)
    const passwordValid:Password = Password.create(password)

    const userData: IUser ={
      username: usernameValid,
      password: passwordValid
    }
    let user:IUser = await this.usersRepository.create(userData);

    const accountData:IAccount = {
      balance: 100
    }
    const account = await this.accountRepository.create(accountData)
  
    const res = await this.usersRepository.updateById({
      ...user,
      accountId: account.id,
    })
    console.log(res)
    return this.mapper.toResponse(res)
  }
}