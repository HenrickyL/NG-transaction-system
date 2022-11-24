import { ITransaction } from "types/entities";

export interface ITransactionRepository{
  create(data: ITransaction): Promise<ITransaction>
  findAllByAccountId(accountId: string, isCredited?: boolean): Promise<ITransaction[]>

}