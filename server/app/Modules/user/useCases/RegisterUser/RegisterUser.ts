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

    const user: IUser ={
      username: usernameValid,
      password: passwordValid
    }
    const res = await this.usersRepository.create(user);
    const iaccount:IAccount = {
      balance: 100
    }
    const account = await this.accountRepository.create(iaccount)
    user.accountId = account.id
    await this.usersRepository.updateById(user.id,user)
    return this.mapper.toResponse(res)
  }
}