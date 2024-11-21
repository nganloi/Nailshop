const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    getDelete: async(genId) => {
        const data = await prisma.soicial.deleteMany({where: {id:genId}});
    }
}