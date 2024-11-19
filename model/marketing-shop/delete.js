const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.marketing_shop.deleteMany({where: {id:id}});
      return data;
     },
  
}