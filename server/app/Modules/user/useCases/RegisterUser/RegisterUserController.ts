import { IController } from "app/core/infra/IController";
import { created, HttpResponse } from "types/HttpResponses";
import { RegisterUser } from "./RegisterUser";
import { RegisterUserRequest, UserResponse } from 'types/DTOs/userDTO';

export class RegisterUserController implements IController<RegisterUserRequest,UserResponse> {
  constructor(
    private registerUser: RegisterUser
  ) {}

  async handle(request: RegisterUserRequest): Promise<HttpResponse<UserResponse>> {

      const { username, password } = request

      const result = await this.registerUser.execute({
        username,
        password,
      })

      return created<UserResponse>(result)
  }
}
