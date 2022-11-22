import { IUseCase } from "@core/infra/IUseCase";
import { IAccountRepository, } from "@modules/account/repositories/IAccountRepository";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { AccountGetBalanceRequest,AccountResponse } from "types/DTOs/accountDTO";

export class GetBalance implements IUseCase<AccountGetBalanceRequest, AccountResponse>{
  constructor(
    private accountRepository: IAccountRepository,
    private mapper: UserMapper
    ) {}

  async execute({userId}: AccountGetBalanceRequest): Promise<AccountResponse> {
    throw new Error("Method not implemented.");
  }
}