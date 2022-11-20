import { User } from "@prisma/client";
import { Users } from "../User";
import { Password } from '@modules/account/domain/user/Password';

export abstract class UserMapper {
  static ToDomain(user: User): Users {
      return new Users({
        username: user.username,
        password: Password.create(user.password, true)
      })
  }
  static async toPersistence(user: Users) {
    return {
      id: user.id,
      name: user.username,
      password: await user.password.getHashedValue(),
    }
  }
}