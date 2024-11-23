const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.coupon_product.deleteMany({where: {couponid:id}});
      const data1 = await prisma.category_coupon.deleteMany({where: {couponid:id}});
      const data2= await prisma.order_coupon.deleteMany({where: {couponid:id}});
      const data3 = await prisma.typer_coupon.deleteMany({where: {couponid:id}});
      const data4 = await prisma.user_coupon.deleteMany({where: {couponid:id}});
      const data5 = await prisma.coupon.deleteMany({where: {id:id}});
     },
  
}