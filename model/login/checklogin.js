const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    checkLogin: async(mail) =>{
        const pass = await prisma.user.findMany({
            where: {email: mail},
           
        })
        return pass;
  
    }
}