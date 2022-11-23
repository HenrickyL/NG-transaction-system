import { IUseCase } from "@core/infra/IUseCase";
import { IAccountRepository } from "@modules/account/repositories/IAccountRepository";
import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { AccountCashOutRequest, AccountCashOutResponse } from "types/DTOs/accountDTO";
import { CashOutInsufficientBalanceError, CashOutInternalError, CashOutValueError } from "./errors";
import { IAccount } from './../../../../../types/entities/IAccount.d';

export class CashOut implements IUseCase<AccountCashOutRequest, AccountCashOutResponse>{
  constructor(
    private userRepository: IUsersRepository,
    private accountRepository: IAccountRepository,
    ) {}

  async execute(request: AccountCashOutRequest): Promise<AccountCashOutResponse> {
    const {inSessionUserId,cashInUsername,value} = request
    if(value <= 0){
      throw new CashOutValueError(value)
    }
    const currentUser = await this.userRepository.findById(inSessionUserId)
    const currentAccount = await this.accountRepository.findById(currentUser.accountId)
    if(currentAccount.balance < value){
      throw new CashOutInsufficientBalanceError(value);
    }
    //
    const cashInUser = await this.userRepository.findByUsername(inSessionUserId)
    const cashInAccount = await this.accountRepository.findById(cashInUser.accountId)
    //
    const currentAccountResolved: IAccount = {
      ...currentAccount,
      balance: currentAccount.balance - value
    }
    const updatedCurrentAccount = await this.accountRepository.update(currentAccountResolved)
    //
    const cashInAccountResolved: IAccount = {
      ...cashInAccount,
      balance: cashInAccount.balance + value
    }
    try{
      const updatedCashInAccount = await this.accountRepository.update(cashInAccountResolved)
      return {
        currentBalance: updatedCurrentAccount.balance
      }
    }catch(e){
      const reversedCurrentAccount = await this.accountRepository.update(currentAccount)
      throw new CashOutInternalError(cashInUser.username)
    }
  }
}