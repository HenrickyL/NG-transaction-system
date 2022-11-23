import { IMapper } from "@core/infra/IMapper";
import { Account } from "@prisma/client";
import {AccountResponse} from "types/DTOs/accountDTO"
import { IAccount } from 'types/entities';


export class AccountMapper implements IMapper<IAccount, Account,AccountResponse>{
  toEntity(model: Account): IAccount {
    return {
      id: model.id,
      balance: model.balance,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    }
  }
  toModel(entity: IAccount): Account {
    return {
      id:entity.id,
      balance: entity.balance,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
  toResponse(entity: IAccount): AccountResponse {
    return {
      id: entity.id,
      balance: entity.balance
    }
  }
}