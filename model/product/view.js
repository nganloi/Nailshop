const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   product: async() => {
    const data = await prisma.product.findMany();
    return data;
   },
}