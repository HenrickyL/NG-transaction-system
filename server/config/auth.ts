export const auth = {
  port: process.env.API_PORT || process.env.PORT,
  secretKey: process.env.APP_SECRET,
  expireIn: 10 * 60 
};