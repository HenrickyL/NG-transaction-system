import { Request, Response } from "express"
import { IController } from "../IController"
import { ErrorException } from 'types/errors';
import { UserResponse } from "types/DTOs/userDTO";

export const adaptRoute = (controller: IController) => {
  return async (request: Request<UserResponse>, response: Response) => {
    const requestData = {
      ...request.body,
      ...request.params,
      ...request.query,
    }
    try{
      const httpResponse = await controller.handle(requestData)
      return response.status(httpResponse.statusCode).json(httpResponse.body)
    }catch(e){
      if(e instanceof ErrorException){
        return response.status(e.statusCode).json({
          type: e.type,
          message: e.message,
        })
      }else{
        return response.status(500).json({
          type: 'InterError',
          message: e,
        })
      }
    }

    
  }
}
