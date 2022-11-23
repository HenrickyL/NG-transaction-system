
import { IController } from '@core/infra/IController';
import { HttpResponse, ok } from 'types/HttpResponses';
import { GetBalance } from './GetBalance';
import { AccountGetBalanceRequest, AccountResponse } from 'types/DTOs/accountDTO';

export class GetBalanceController implements IController<AccountGetBalanceRequest,AccountResponse>{
  constructor(
    private getBalance: GetBalance
  ) {}
  
  async handle (request: AccountGetBalanceRequest): Promise<HttpResponse<AccountResponse>>{
      const result = await this.getBalance.execute(request)
      return ok(result)

  }

}
