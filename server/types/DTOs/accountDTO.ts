
export type AccountResponse = {
  id: string
  balance: number
  createdAt: Date
  updatedAt: Date
}


export type AccountGetBalanceRequest = {
  username: string,
}


export type AccountCashOutRequest = {
  username: string;
  cashInUsername: string,
  value: number
}

export type AccountCashOutResponse = {
  currentTransactionId: string,
  currentBalance: number,
}
