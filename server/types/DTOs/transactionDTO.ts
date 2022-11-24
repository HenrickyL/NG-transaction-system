export type TransactionResponse = {
  id: string
  value: number
  debitedAccountId: string
  creditedAccountId: string
}

export type TransactionRequest = {
  username: string
}



export type GetTransactionResponse = {
  userId:  string
  username:  string
  credited: TransactionResponse[]
  debited: TransactionResponse[]
}