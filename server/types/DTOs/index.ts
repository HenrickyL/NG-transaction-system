export type AuthenticatedMiddlewareRequest = {
  accessToken?: string,
  authorization: string
}


export type AuthenticatedResponse = {
  token: string
}