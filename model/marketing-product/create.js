const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   postCreate: async (name, img, describe, product) => {
      const data1 = await prisma.marketing.create({
         data: {
            name: name,
            img: img,
            describe: describe,
            active: 0,
         }
      })
      ////Lấy thông tin marketinh vừa tạo
      const data = await prisma.marketing.findMany({
         where: { name: name, describe: describe }
      });
      ////Nếu có product được chọn thì thay đổi

      if (product != undefined) {
         if (product > 0) {
            const creat1 = await prisma.marketing_product.create({
               data: {
                  productid: parseInt(product),
                  marketingid: data[0].id
               }
            })
         } else {
            for (var i = 0; i < product.length; i++) {
               const creat1 = await prisma.marketing_product.create({
                  data: {
                     productid: parseInt(product[i]),
                     marketingid: data[0].id
                  }
               })
            }
         }

      }
   },
}