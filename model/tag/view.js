const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   tag: async() => {
    const data = await prisma.tag.findMany({
     
    });
    return data;
   },
}