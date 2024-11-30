const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const dele1 = await prisma.tag_blog.deleteMany({where: {blogid:id}});
      const dele2 = await prisma.blog.deleteMany({where: {id:id}});

      return {dele1,dele2};
     },
  
}