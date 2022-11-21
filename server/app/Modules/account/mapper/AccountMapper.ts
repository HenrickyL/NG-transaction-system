import { IMapper } from "@core/infra/IMapper";
import { Account } from "@prisma/client";
import { Accounts } from './../domain/Accounts';
import {AccountResponse} from "types/DTOs/accountDTO"
export class AccountMapper implements IMapper<Accounts, Account,AccountResponse>{
  toEntity(model: Account): Accounts {
    throw new Error("Method not implemented.");
  }
  toModel(entity: Accounts): Promise<Account> {
    throw new Error("Method not implemented.");
  }
  toResponse(entity: Accounts): AccountResponse {
    return {
      id: entity.id,
      balance: entity.balance
    }
  }
}