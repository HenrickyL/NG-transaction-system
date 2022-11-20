import { prisma } from "@infra/prisma";
import { UserMapper } from "@modules/account/domain/user/mapper/UserMapper";
import { Users } from "@modules/account/domain/user/User";
import { UserAlreadyExistError } from "@modules/account/useCases/errors";
import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  async create(user: Users): Promise<Users> {
    const userExists = await prisma.user.findUnique({
      where: { username: user.username },
    })
    if(!userExists){
      throw new UserAlreadyExistError(user.username);
    }
    const data = await UserMapper.toPersistence(user)

     const current =  await prisma.user.create({ data:{
        username: user.username,
        password: user.password.value
     } });
     return UserMapper.ToDomain(current)
  }
}