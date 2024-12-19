const {PrismaClient, Prisma} = require('@prisma/client');
const { getSearchCate } = require('../../controller/dashboard/products');
const { category } = require('../category/view');
const prisma = new PrismaClient();

module.exports = {
   product: async() => {
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
        },
       
      });
    
      return data;
    },
     getSearchPrice: async (price1, price2) => {
      const products = await prisma.product.findMany({
          where: {
              price: {
                  gte: price1.toString(), 
                  lte: price2.toString(), 
              },
          }
      });
      return products;
  },
}