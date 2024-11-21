const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.role_user.deleteMany({where: {roleid:id}});
      const data1 = await prisma.role.deleteMany({where: {id:id}});
     },
  
}