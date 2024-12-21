const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   product: async() => {
    const data = await prisma.product.findMany({where:{classfy:{some:{}}}});
    return data;
   },
   product1: async() => {
    const data = await prisma.product.findMany();
    return data;
   },
   getSearchCate: async (categ) => {
      const data = await prisma.product.findMany({
        where: {
          category: {
            some: {
              categoryid: parseInt(categ),  
            },
          },
          classfy:{some:{}},
        },
       
      });
    
      return data;
    },
     getSearchPrice: async (price1, price2) => {
      const products = await prisma.product.findMany({
          where: {
              price: {
                  gte: price1, 
                  lte: price2, 
              },
              classfy:{some:{}},
          }
      });
      return products;
  },
}