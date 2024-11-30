const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   Blog: async() => {
    const data = await prisma.blog.findMany();
    return data;
   },
}