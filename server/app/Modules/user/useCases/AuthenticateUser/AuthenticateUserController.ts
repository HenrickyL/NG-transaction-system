import { IController } from "@core/infra/IController";
import { AuthenticatedResponse } from "types/DTOs";
import { AuthenticateUserRequest } from "types/DTOs/userDTO";
import { HttpResponse, ok } from "types/HttpResponses";
import { AuthenticateUser } from "./AuthenticateUser";

export default class AuthenticateUserController implements IController<AuthenticateUserRequest, AuthenticatedResponse> {

  constructor(private authUser: AuthenticateUser){}

  async handle(request: AuthenticateUserRequest): Promise<HttpResponse<AuthenticatedResponse>>{
      const result = await this.authUser.execute(request)
      return ok(result)
  }

}