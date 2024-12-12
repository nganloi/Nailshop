const {PrismaClient, Prisma} = require('@prisma/client');
const { deleteWish } = require('../../controller/dashboard/wishlist');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.role_user.deleteMany({where: {userid:id}});
      const data1 = await prisma.user_coupon.deleteMany({where: {userid:id}});
      const data2= await prisma.user_product.deleteMany({where: {userid:id}});
      const data3 = await prisma.comment.deleteMany({where: {userid:id}});
      const data4 = await prisma.review.deleteMany({where: {userid:id}});
      const data5 = await prisma.order.deleteMany({where: {userid:id}});
      const data6 = await prisma.typer_user.deleteMany({where: {userid:id}});
      const data7 = await prisma.productlike.deleteMany({where: {userid:id}});
      const data8 = await prisma.address_order.deleteMany({where: {userid:id}});
      const data9 = await prisma.user.deleteMany({where: {id:id}});

     },
     deletWish:async(id)=>{
      const del = await prisma.productlike({
         where:{id:id}
      })
     }
  
}