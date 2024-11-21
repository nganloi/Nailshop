const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   typer: async() => {
    const data = await prisma.typer.findMany({
      include:{
         user:true,
      }
    });
    return data;
   },
}