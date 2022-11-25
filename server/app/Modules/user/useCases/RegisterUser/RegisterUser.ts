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
    await this.usersRepository.validateUsernameNotExist(username);
    const userData: IUser ={
      username: Username.create(username),
      password: Password.create(password)
    }
    const accountData:IAccount = {
      balance: 100
    }
    const account = await this.accountRepository.createWithUser(userData,accountData, this.mapper);
    const res = await this.usersRepository.findByAccountId(account.id)
    return this.mapper.toResponse(res)
  }
}