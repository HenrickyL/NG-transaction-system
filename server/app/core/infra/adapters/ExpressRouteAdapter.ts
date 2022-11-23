import { Request, Response } from "express"
import { ErrorException } from "types/errors"
import { IController } from "../IController"

export const adaptRoute = (controller: IController) => {

  return async (request: Request, response: Response) => {
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
      }else if(e instanceof Error){
        return response.status(500).json({
          type: 'InternalError',
          message: e,
        })
      }else{
        return response.status(500).json({
          type: 'InternalError',
          message: e,
        })
      }
    }

    
  }
}
