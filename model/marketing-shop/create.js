const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,link,img,describe ) => {
        const data = await prisma.marketing_shop.create({
        data: {
           name: name,
           img: img,
           link:link,
           describe:describe,
           active:0,
        }})
     },
  }