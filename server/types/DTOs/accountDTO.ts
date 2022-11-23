
export type AccountResponse = {
  id: string
  balance: number
}


export type AccountGetBalanceRequest = {
  userId: string,
  inSessionUserId: string
}


export type AccountCashOutRequest = {
  inSessionUserId: string,
  cashInUsername: string,
  value: number
}

export type AccountCashOutResponse = {
  currentBalance: number
}
