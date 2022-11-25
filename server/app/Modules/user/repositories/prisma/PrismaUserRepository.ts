import { prisma } from "@infra/prisma";
import { AccountNotFound, IdNotBeNullError, UserAlreadyExistError, UsernameNotBeNullError, UsernameNotFound, UserNotFound } from "@modules/user/useCases/RegisterUser/errors";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { IUser } from "types/entities";
import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  constructor(private mapper: UserMapper){}
  async validateUsernameNotExist(username: string): Promise<void> {
    if(username){
      const user = await prisma.user.findUnique({
        where: { username: username.toLocaleLowerCase()}
      })
      if(user){
        throw new UserAlreadyExistError(username);
      }
      return
    }
    throw new UsernameNotBeNullError()
  }

  async validateId(id: string): Promise<void> {
    if(id){
      const user = await prisma.user.findUnique({
        where: {id}
      })
      if(!user){
        throw new UserNotFound(id);
      }
      return
    }
    throw new IdNotBeNullError()
  }
  
  async validateUsername(username: string): Promise<void> {
    if(username){
      const user = await prisma.user.findUnique({
        where: { username: username.toLocaleLowerCase()}
      })
      if(!user){
        throw new UsernameNotFound(username);
      }
      return
    }
    throw new UsernameNotBeNullError()
  }


  async update(user: IUser): Promise<IUser> {
    const res = await prisma.user.update({
      where:{id: user.id},
      data: {
        username: user.username,
        password: user.password.value,
        accountId: user.accountId,
      }
    })
    return this.mapper.toEntity(res)
  }
  
  async findById(id: string, validate?:boolean): Promise<IUser> {
    const user = await prisma.user.findUnique({
      where: { id }, 
      include:{
        account:true
      } 
    })
    if(!user && validate){
      throw new UserNotFound(id);
    }
    return this.mapper.toEntity(user)
  }

  async findByAccountId(accountId: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { accountId }, 
      include:{
        account:true
      } })
    if(!user)
      throw new AccountNotFound(accountId);
      
    return this.mapper.toEntity(user)
  }

  async findByUsername(username: string): Promise<IUser> {
    if(username){
      const user = await prisma.user.findUnique({
        where: { username: username.toLocaleLowerCase()}
      })
      if(!user){
        throw new UsernameNotFound(username);
      }
      return this.mapper.toEntity(user)
    }
    throw new UsernameNotBeNullError()
  }

  async create(user: IUser): Promise<IUser> {
    const data = await this.mapper.toModelAsync(user)
     const current =  await prisma.user.create({ data:{
        username: data.username,
        password: data.password
     } });
     console.log('a')
     return this.mapper.toEntity(current)
  }
}