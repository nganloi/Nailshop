const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   role: async() => {
    const data = await prisma.role.findMany({
      include:{
         user:true,
      }
    });
    return data;
   },
}