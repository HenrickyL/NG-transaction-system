import { IUseCase } from "@core/infra/IUseCase";
import { IAccountRepository } from "@modules/account/repositories/IAccountRepository";
import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { AccountCashOutRequest, AccountCashOutResponse } from "types/DTOs/accountDTO";
import { CashOutInsufficientBalanceError, CashOutInternalError, CashOutValueError, CashOutYourselfAccountError } from "./errors";
import { IAccount } from '../../../../../types/entities/IAccount';
import { UnPermissionError } from "@modules/user/useCases/AuthenticateUser/errors";
import { InSection } from "@config/auth";
import { ITransactionRepository } from './../../../transactions/repositories/ITransactionRepository';
import { ITransaction } from "types/entities";

export class CashOut implements IUseCase<AccountCashOutRequest, AccountCashOutResponse>{
  constructor(
    private userRepository: IUsersRepository,
    private accountRepository: IAccountRepository,
    private transactionRepository: ITransactionRepository,
    ) {}

  async execute(request: AccountCashOutRequest): Promise<AccountCashOutResponse> {
    const {cashInUsername,value} = request
    const {inSessionUserId} = InSection.auth
    if(value <= 0){
      throw new CashOutValueError(value)
    }
    const currentUser = await this.userRepository.findById(inSessionUserId)
    const currentAccount = await this.accountRepository.findById(currentUser.accountId)
    if(currentAccount.balance < value){
      throw new CashOutInsufficientBalanceError(value);
    }
    console.log('current: ',currentUser)

    //
    const cashInUser = await this.userRepository.findByUsername(cashInUsername)
    if(inSessionUserId == cashInUser.id){
      throw new CashOutYourselfAccountError();
    }
    console.log('cashInUser: ',cashInUser)

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
      const transactionData: ITransaction = {
        value: value,
        creditedAccountId: updatedCashInAccount.id,
        debitedAccountId: currentAccount.id
      } 
      var currentTransaction = await this.transactionRepository.create(transactionData)
      return {
        currentBalance: updatedCurrentAccount.balance,
        currentTransactionId: currentTransaction.id
      }
    }catch(e){
      const reversedCurrentAccount = await this.accountRepository.update(currentAccount)
      throw new CashOutInternalError(cashInUser.username)
    }
  }

  validate({username}: AccountCashOutRequest): void{
    if(InSection.auth.InSessionUsername != username){
      throw new UnPermissionError();
    }
  }

  
}