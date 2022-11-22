const port = process.env.API_PORT || process.env.PORT
const secretKey = process.env.APP_SECRET
const expireIn = 10 * 60 
export const auth = {
  port,
  secretKey,
  expireIn
};