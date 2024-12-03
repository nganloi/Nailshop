const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   user: async() => {
    const data = await prisma.user.findMany();
    return data;
   },
   getUser: async(userid) => {
      const data = await prisma.user.findUnique({where: {id:userid}})
      return data;
   }
}