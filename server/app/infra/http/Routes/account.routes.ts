import { adaptMiddleware } from "@core/infra/adapters/ExpressMiddlewareAdapter";
import { adaptRoute } from "@core/infra/adapters/ExpressRouteAdapter";
import express from "express";
import { makeGetBalanceController } from "../factories/controllers/GetBalanceControllerFactory";
import { makeEnsureAuthenticatedMiddleware } from "../factories/middlewares/EnsureAuthenticatedMiddlewareFactory";


const accountRouter = express.Router()

accountRouter.use(adaptMiddleware(makeEnsureAuthenticatedMiddleware()))
accountRouter.get('/:userId', adaptRoute(makeGetBalanceController()))

export { accountRouter }
