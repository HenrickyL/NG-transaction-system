import { IUseCase } from "@core/infra/IUseCase";
import { GetTransactionResponse, TransactionRequest } from "types/DTOs/transactionDTO";
import { IUsersRepository } from '../../../user/repositories/IUsersRepository';
import { ITransactionRepository } from '../../../transactions/repositories/ITransactionRepository';
import { TransactionMapper } from "@modules/transactions/mapper/TransactionMapper";
import { InSection } from '@config/auth';
import { UnPermissionError } from '../../../user/useCases/AuthenticateUser/errors/index';

export class GetTransactions implements IUseCase<TransactionRequest,GetTransactionResponse>{
  constructor(
    private userRepository: IUsersRepository,
    private transactionRepository: ITransactionRepository,
    private transactionMapper: TransactionMapper

    ){}
  async execute({username}: TransactionRequest): Promise<GetTransactionResponse> {
    const user = await this.userRepository.findByUsername(username)
    var creditedTransactions = await this.transactionRepository.findAllByAccountId(user.accountId,true)
    var debitedTransactions = await this.transactionRepository.findAllByAccountId(user.accountId,false)

    return {
      userId: user.id,
      username: user.username,
      credited: creditedTransactions.map(x=>this.transactionMapper.toResponse(x)),
      debited: debitedTransactions.map(x=>this.transactionMapper.toResponse(x))
    }
  }
  validate ({username}: TransactionRequest): void{
    console.log(InSection.auth,username)
    if( !InSection.IsEqualUsername(username)){
      throw new UnPermissionError();
    }
  }

}