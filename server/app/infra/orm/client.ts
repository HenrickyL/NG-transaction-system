import { PrismaClient } from '.prisma/client';

const orm = new PrismaClient({
  log: ['query'],
});

export { orm };