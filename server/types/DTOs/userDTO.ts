
export type RegisterUserRequest = {
  username: string
  password: string
}

export type UserResponse = {
  id: string
  username: string
  createdAt: Date
  updatedAt?: Date
}

export type AuthenticateUserRequest = {
  username: string
  password: string
}

export interface AuthData {
  userId: string
  token: string
}

export interface AuthTokenPayload {
  exp: number
  sub: string
}