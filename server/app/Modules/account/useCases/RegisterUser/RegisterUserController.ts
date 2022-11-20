import { Controller } from "app/core/infra/Controller";
import { RegisterUserRequest } from "types/DTOs";
import { created, HttpResponse } from "types/HttpResponses";
import { Users } from './../../domain/user/User';
import { RegisterUser } from "./RegisterUser";

export class RegisterUserController implements Controller<Users> {
  constructor(
    private registerUser: RegisterUser
  ) {}

  async handle(request: RegisterUserRequest): Promise<HttpResponse<Users>> {
    try {
      const { username, password } = request

      const result = await this.registerUser.execute({
        username,
        password,
      })

      return created<Users>()
  }
}
