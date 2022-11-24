
import { IController } from '@core/infra/IController';
import { HttpResponse, ok } from 'types/HttpResponses';
import { GetBalance } from './GetBalance';
import { AccountGetBalanceRequest, AccountResponse } from 'types/DTOs/accountDTO';
import { GetBalanceInternalError } from './errors';

export class GetBalanceController implements IController<AccountGetBalanceRequest,AccountResponse>{
  constructor(
    private getBalance: GetBalance
  ) {}
  
  async handle (request: AccountGetBalanceRequest): Promise<HttpResponse<AccountResponse>>{
      try{
        if(this.getBalance.validate){
          this.getBalance.validate(request)
        }
        const result = await this.getBalance.execute(request)
        return ok(result)
      }catch(e){
        throw new GetBalanceInternalError(e);
      }
  }

}
