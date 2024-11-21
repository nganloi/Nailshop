const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   Service: async() => {
    const data = await prisma.service.findMany();
    return data;
   },
}