import { IController } from "@core/infra/IController";
import { AccountCashOutRequest, AccountCashOutResponse } from "types/DTOs/accountDTO";
import { HttpResponse, ok } from "types/HttpResponses";
import { CashOut } from "./CashOut";
import { CashOutInternalError } from "./errors";

export class CashOutController implements IController<AccountCashOutRequest, AccountCashOutResponse>{

  constructor(
    private cashOut: CashOut
  ) {}
  
  async handle(request: AccountCashOutRequest): Promise<HttpResponse<AccountCashOutResponse>>{
    if(this.cashOut.validate){
      this.cashOut.validate(request)
    }
    try{
      const result = await this.cashOut.execute(request)
      return ok(result)
    }catch(e){
      throw new CashOutInternalError(e);
    }
  }
}
