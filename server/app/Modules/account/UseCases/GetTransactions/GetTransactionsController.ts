import { IController } from "@core/infra/IController";
import { TransactionRequest, GetTransactionResponse } from "types/DTOs/transactionDTO";
import { HttpResponse, ok } from "types/HttpResponses";
import { GetTransactions } from './GetTransactions';

export class GetTransactionsController implements IController<TransactionRequest,GetTransactionResponse>{
  constructor(
    private getTransactions: GetTransactions
  ) {}
  async handle(request: TransactionRequest): Promise<HttpResponse<GetTransactionResponse>>{
      if(this.getTransactions.validate){
        this.getTransactions.validate(request)
      }
      var result = await this.getTransactions.execute(request)
      return ok(result)
  }
}