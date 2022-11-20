import { User } from "@prisma/client";
import { Users } from "../User";
import { Password } from '@modules/account/domain/user/Password';
import { UserResponse } from "types/DTOs/userDTO";

export abstract class UserMapper {
  static ToDomain(user: User): Users {
      const current = new Users({
        username: user.username,
        password: Password.create(user.password, true),
        accountId: user.accountId
      }, user.id)
      current.updatedAt = user.updatedAt
      current.createdAt = user.createdAt
      return current
  }
  static async toPersistence(user: Users): Promise<User> {
    return {
      id: user.id,
      username: user.username,
      accountId: user.accountId,
      password: await user.password.getHashedValue(),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }

  static toResponse(user: Users): UserResponse{
    return {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}