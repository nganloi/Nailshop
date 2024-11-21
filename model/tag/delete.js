const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.tag_blog.deleteMany({where: {tagid:id}});
      const data1 = await prisma.tag.deleteMany({where: {id:id}});
     },
  
}