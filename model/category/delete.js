const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.category_product.deleteMany({where: {categoryid:id}});
      const data1 = await prisma.category.deleteMany({where: {id:id}});
     },
  
}