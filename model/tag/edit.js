
const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.tag.findMany({where: {id:id}});
    return data;
   },
   postEdit: async(id,name) => {
      const data = await prisma.tag.update({where: {id:id},
      data: {
         name: name,
      }});
      
    
   },
}