const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   category: async() => {
    const data = await prisma.category.findMany({
      include:{
         product:{
            include:{
               product:true,
            }
         },
      }
    });
    return data;
   },
   page:async(page,quantity)=>{
      const data = await prisma.category.findMany({
         skip:page,
         take:quantity,
         include:{
            product:{
               include:{
                  product:true,
               }
            },
         }
       });
       return data;
      }
}