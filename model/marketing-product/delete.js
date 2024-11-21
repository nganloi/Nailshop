const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.marketing_product.deleteMany({where: {marketingid:id}});
      const data1 = await prisma.marketing.deleteMany({where: {id:id}});
     },
  
}