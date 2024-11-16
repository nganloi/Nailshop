const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(genId) => {
    const data = await prisma.soicial.findUnique({where: {id:genId}});
    return data;
   },
   postEdit: async(genId, name,img,link ) => {
      const data = await prisma.soicial.update({where: {id:genId},
      data: {
         name: name,
         img: img,
         link:link

      }})
      return data;
   }

}