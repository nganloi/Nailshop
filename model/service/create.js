const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,img,content ) => {
        const data = await prisma.service.create({
        data: {
           name: name,
           img: img,
           content:content,
          
        }})
     },
  }