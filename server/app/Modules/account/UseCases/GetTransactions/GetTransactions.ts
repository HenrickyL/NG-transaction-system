import { IUseCase } from "@core/infra/IUseCase";
import { GetTransactionsResponse, TransactionRequest } from "types/DTOs/transactionDTO";
import { IUsersRepository } from '../../../user/repositories/IUsersRepository';
import { ITransactionRepository } from '../../../transactions/repositories/ITransactionRepository';
import { TransactionMapper } from "@modules/transactions/mapper/TransactionMapper";
import { InSection } from '@config/auth';
import { UnPermissionError } from '../../../user/useCases/AuthenticateUser/errors/index';

export class GetTransactions implements IUseCase<TransactionRequest,GetTransactionsResponse>{
  constructor(
    private userRepository: IUsersRepository,
    private transactionRepository: ITransactionRepository,
    private transactionMapper: TransactionMapper

    ){}
  async execute({username}: TransactionRequest): Promise<GetTransactionsResponse> {
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
    if( !InSection.IsEqualUsername(username)){
      throw new UnPermissionError();
    }
  }

}