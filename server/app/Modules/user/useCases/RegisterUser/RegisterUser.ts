import { Password } from "@modules/user/domain/Password";
import { Username } from "@modules/user/domain/Username";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { Users } from "@modules/user/domain/User";
import { RegisterUserRequest, UserResponse } from "types/DTOs/userDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";



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