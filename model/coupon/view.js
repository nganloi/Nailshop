const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   coupon: async() => {
    const data = await prisma.coupon.findMany();
    return data;
   },
}