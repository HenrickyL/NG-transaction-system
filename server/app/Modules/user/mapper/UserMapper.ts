import { IMapper } from "@core/infra/IMapper";
import { User } from "@prisma/client";
import { UserResponse } from "types/DTOs/userDTO";
import { Password } from "../domain/Password";
import { IUser } from 'types/entities';


export class UserMapper implements IMapper<IUser, User, UserResponse>{
  toEntity(model: User): IUser {
    const current = {
      id: model.id,
      username: model.username,
      password: Password.create(model.password, true),
      accountId: model.accountId,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt
    }
    return current
  }
  async toModelAsync(entity: IUser): Promise<User> {
    return {
      id: entity.id,
      username: entity.username,
      accountId: entity.accountId,
      password: await entity.password.getHashedValue(),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }

  toModel(entity: IUser): User{
    return {
      id: entity.id,
      username: entity.username,
      accountId: entity.accountId,
      password: entity.password.value,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
  
  toResponse(entity: IUser): UserResponse {
    return {
      id: entity.id,
      username: entity.username,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
}
