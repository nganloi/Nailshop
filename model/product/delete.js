const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.category_product.deleteMany({where: {productid:id}});
      const data1 = await prisma.coupon_product.deleteMany({where: {productid:id}});
      const data2= await prisma.order_product.deleteMany({where: {productid:id}});
      const data3 = await prisma.review.deleteMany({where: {productid:id}});
      const data4 = await prisma.classfy.deleteMany({where: {productid:id}});
      const data5 = await prisma.user_product.deleteMany({where: {productid:id}});
      const data6 = await prisma.marketing_product.deleteMany({where: {productid:id}});
      const data7 = await prisma.productlike.deleteMany({where: {productid:id}});
      const data8 = await prisma.product.deleteMany({where: {id:id}});
   },
   deleteCart:async(id)=>{
      const del= await prisma.user_product.deleteMany({
         where:{id:id}
      })
   }
}