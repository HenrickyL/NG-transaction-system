import { prisma } from "@infra/prisma";
import { UserAlreadyExistError, UserNotFound } from "@modules/user/useCases/RegisterUser/errors";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { IUser } from "types/entities";

import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  constructor(private mapper: UserMapper){}
  
  async findById(id: string): Promise<IUser> {
    const user = await prisma.user.findUnique({
      where: { id }, 
    })
    if(!user){
      throw new UserNotFound(id);
    }
    return this.mapper.toEntity(user)

  }

  async findByUsername(username: string): Promise<IUser> {
    const user = await prisma.user.findUnique({
      where:{ username}
    })
    if(!user) return null
    return this.mapper.toEntity(user)
  }

  async create(user: IUser): Promise<IUser> {
    const userExists = await prisma.user.findUnique({
      where: { username: user.username }, 
    })

    if(userExists){
      throw new UserAlreadyExistError(user.username);
    }
    
    const data = await this.mapper.toModel(user)

     const current =  await prisma.user.create({ data:{
        username: data.username,
        password: data.password
     } });
     return this.mapper.toEntity(current)
  }
}