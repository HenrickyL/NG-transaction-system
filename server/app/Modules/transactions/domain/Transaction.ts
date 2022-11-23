import { Entity } from "@core/domain/Entity"
import { ITransaction } from 'types/entities/ITransaction.d';


export class Transactions extends Entity<ITransaction>{
  protected _value: number
  protected _debitedAccountId: string
  protected _creditedAccountId: string

  get value(): number{
    return this._value;
  }
  get debitedAccountId(): string{
    return this._debitedAccountId;
  }
  get creditedAccountId(): string{
    return this._creditedAccountId;
  }

  constructor(props: ITransaction) {
    super(props)
    this._value = props.value
    this._debitedAccountId = props.debitedAccountId
    this._creditedAccountId = props.creditedAccountId
  }
}
