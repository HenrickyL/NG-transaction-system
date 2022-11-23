
import { AuthenticatedUserSessionSData } from './userDTO';
export type AccountResponse = {
  id: string
  balance: number
}


export type AccountGetBalanceRequest = {
  userId: string,
}


export type AccountCashOutRequest = {
  userId: string;
  cashInUsername: string,
  value: number
}

export type AccountCashOutResponse = {
  currentBalance: number
}
