import { Middleware } from "@core/infra/Middleware"
import { NextFunction, Request, Response } from "express"
import { ErrorException } from 'types/errors';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const requestData = {
      accessToken: request.headers?.['x-access-token'],
      ...(request.headers || {}),
    }
    try{
      const httpResponse = await middleware.handle(requestData, request.body)
      Object.assign(request, httpResponse)
      return next()

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