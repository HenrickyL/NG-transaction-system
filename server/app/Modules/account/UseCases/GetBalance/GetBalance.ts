import { InSection } from "@config/auth";
import { IUseCase } from "@core/infra/IUseCase";
import { IAccountRepository, } from "@modules/account/repositories/IAccountRepository";
import { UnPermissionError } from "@modules/user/useCases/AuthenticateUser/errors";
import { AccountGetBalanceRequest,AccountResponse } from "types/DTOs/accountDTO";
import { IUsersRepository } from './../../../user/repositories/IUsersRepository';
import { AccountMapper } from './../../mapper/AccountMapper';

export class GetBalance implements IUseCase<AccountGetBalanceRequest, AccountResponse>{
  constructor(
    private userRepository: IUsersRepository,
    private accountRepository: IAccountRepository,
    private mapper: AccountMapper
    ) {}

  async execute({username}: AccountGetBalanceRequest): Promise<AccountResponse> {
    const user = await this.userRepository.findByUsername(username)
    const res = await this.accountRepository.findById(user.accountId);
    return this.mapper.toResponse(res)
  }

  validate({username}: AccountGetBalanceRequest):void{
    if(username != InSection.auth.InSessionUsername){
      throw new UnPermissionError();
    }
  }


}