import express from 'express';
import { accountRouter } from './account.routes';
import { sessionsRouter } from './sessions.routes';
import { usersRouter } from './users.routes'

const router = express.Router();

router.use('/users', usersRouter)
router.use('/sessions', sessionsRouter)
router.use('/accounts',accountRouter)

export { router };