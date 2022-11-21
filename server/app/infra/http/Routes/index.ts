import express from 'express';
import { usersRouter } from './users.routes'

const router = express.Router();

console.log('> Router :')
router.use('/users', usersRouter)
console.log(' < Ok')


export { router };