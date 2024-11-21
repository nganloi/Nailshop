const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.service.findMany({where: {id:id}});
    return data;
   },
   postEdit: async(id,name,img,content ) => {
      const data = await prisma.service.update({where: {id:id},
      data: {
         name: name,
         img: img,
         content: content
      }})
   }

}