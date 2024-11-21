const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name) => {
        const creat = await prisma.tag.create({
        data: {
          name: name
        }});
      }
       
  }