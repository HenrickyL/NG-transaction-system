import { AuthenticatedUserSessionsData } from "types/DTOs/userDTO";

export const auth = {
  port: process.env.API_PORT || process.env.PORT,
  secretKey: process.env.APP_SECRET,
  expireIn: `${10 * 60}s` 
};


export abstract class InSection{
    static auth: AuthenticatedUserSessionsData
}