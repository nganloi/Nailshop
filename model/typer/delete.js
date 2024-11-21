const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   delete: async(id) => {
      const data = await prisma.typer_user.deleteMany({where: {typerid:id}});
      const data1 = await prisma.typer_coupon.deleteMany({where: {typerid:id}});
      const data2 = await prisma.typer.deleteMany({where: {id:id}});
     },
  
}