const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   marketingProduct: async() => {
    const data = await prisma.marketing.findMany({include:{product:{include:{product:true}}}});
    return data;
   },
   getPage: async(page,quantity) => {
      const data = await prisma.marketing.findMany({skip:page,take:quantity,include:{product:{include:{product:true}}}});
      return data;
     },
  }