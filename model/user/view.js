const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   user: async() => {
    const data = await prisma.user.findMany();
    return data;
   },
}