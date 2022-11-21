import { IMapper } from "@core/infra/IMapper";
import { User } from "@prisma/client";
import { UserResponse } from "types/DTOs/userDTO";
import { Password } from "../domain/Password";
import { Users } from "../domain/Users";


export class UserMapper implements IMapper<Users, User, UserResponse>{
  toEntity(model: User): Users {
    const current = new Users({
      id: model.id,
      username: model.username,
      password: Password.create(model.password, true),
      accountId: model.accountId,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt
    })
    return current
  }
  async toModel(entity: Users): Promise<User> {
    return {
      id: entity.id,
      username: entity.username,
      accountId: entity.accountId,
      password: await entity.password.getHashedValue(),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
  toResponse(entity: Users): UserResponse {
    return {
      id: entity.id,
      username: entity.username,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
}
