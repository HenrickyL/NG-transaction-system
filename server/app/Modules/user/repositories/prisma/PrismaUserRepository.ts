import { prisma } from "@infra/prisma";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { UserAlreadyExistError } from "@modules/user/useCases/RegisterUser/errors";
import { Users } from "@modules/user/domain/Users";

import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  constructor(private mapper: UserMapper){}

  async findByUsername(username: string): Promise<Users> {
    const user = await prisma.user.findUnique({
      where:{ username}
    })
    if(!user) return null
    return this.mapper.toEntity(user)
  }

  async create(user: Users): Promise<Users> {
    const userExists = await prisma.user.findUnique({
      where: { username: user.username },
    })
    if(userExists){
      throw new UserAlreadyExistError(user.username);
    }
    const data = await this.mapper.toModel(user)

     const current =  await prisma.user.create({ data:{
        id: data.id,
        username: data.username,
        password: data.password
     } });
     return this.mapper.toEntity(current)
  }
}