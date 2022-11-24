export type TransactionResponse = {
  id: string
  value: number
  debitedAccountId: string
  creditedAccountId: string
}

export type TransactionRequest = {
  userId: string
}



export type GetTransactionResponse = {
  userId:  string
  credited: TransactionResponse[]
  debited: TransactionResponse[]
}