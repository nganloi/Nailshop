const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   marketingShop: async() => {
    const data = await prisma.marketing_shop.findMany();
    return data;
   },
}