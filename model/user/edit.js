const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(genId) => {
    const data = await prisma.user.findUnique({where: {id:genId}});
    return data;
   },


}