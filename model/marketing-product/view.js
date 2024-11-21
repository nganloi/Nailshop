const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   marketingProduct: async() => {
    const data = await prisma.marketing.findMany({include:{product:{include:{product:true}}}});
    return data;
   },
}