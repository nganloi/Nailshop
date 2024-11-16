const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
 getSocial: async() => {
    const data = await prisma.soicial.findMany();
    return data;
 }
    
}