const port = process.env.PORT
const secret = process.env.APP_SECRET
const tokenExpiryTimeInSeconds = 10 * 60 
export {
  port,
  secret,
  tokenExpiryTimeInSeconds
};