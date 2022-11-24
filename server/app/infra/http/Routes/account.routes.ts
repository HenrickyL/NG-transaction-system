import { adaptMiddleware } from "@core/infra/adapters/ExpressMiddlewareAdapter";
import { adaptRoute } from "@core/infra/adapters/ExpressRouteAdapter";
import express from "express";
import { makeCashOutController } from "../factories/controllers/CashOutControllerFactory";
import { makeGetBalanceController } from "../factories/controllers/GetBalanceControllerFactory";
import { makeEnsureAuthenticatedMiddleware } from "../factories/middlewares/EnsureAuthenticatedMiddlewareFactory";
import { makeGetTransactionsController } from './../factories/controllers/GetTransactionsControllerFactory';


const accountRouter = express.Router()

accountRouter.use(adaptMiddleware(makeEnsureAuthenticatedMiddleware()))
accountRouter.get('/:userId', adaptRoute(makeGetBalanceController()))
accountRouter.post('/:userId', adaptRoute(makeCashOutController()))
accountRouter.get('/:userId/transactions', adaptRoute(makeGetTransactionsController()))
export { accountRouter }
