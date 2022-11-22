import { IController } from "@core/infra/IController";
import { AuthenticateUserRequest } from "types/DTOs/userDTO";
import { HttpResponse, ok } from "types/HttpResponses";
import { AuthenticateUser } from "./AuthenticateUser";

export default class AuthenticateUserController implements IController {

  constructor(private authUser: AuthenticateUser){}

  async handle({username,password}: AuthenticateUserRequest): Promise<HttpResponse<any>>{
    const result = await this.authUser
      .execute({
                username,
                password
              })
    const { token } = result
    return ok({ token })
  }

}