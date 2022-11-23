import { ITransaction } from "types/entities";

export interface ITransactionRepository{
  create(data: ITransaction): Promise<ITransaction>
}