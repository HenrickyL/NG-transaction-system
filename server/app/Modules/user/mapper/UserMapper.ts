import { User } from "@prisma/client";
import { UserResponse } from "types/DTOs/userDTO";
import { Password } from "../domain/Password";
import { Users } from "../domain/User";

export abstract class UserMapper {
  static ToDomain(user: User): Users {
      const current = new Users({
        id: user.id,
        username: user.username,
        password: Password.create(user.password, true),
        accountId: user.accountId,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      })
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