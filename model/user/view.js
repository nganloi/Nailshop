const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   user: async() => {
    const data = await prisma.user.findMany();
    return data;
   },
   getUser: async(userid) => {
      const data = await prisma.user.findUnique({
         where: {id:userid},
         include:{
            role:{
               include:{
                  role:true
               }
            },
            product:{
               include:{
                  product:true,
                  classfy:true,
               }
            },
            productlike:{
               include:{
                  product:true,
               }
            }
         }
      })
      return data;
   },
   getProfile: async(userid) => {
      const data = await prisma.user.findUnique({
         where: {id:userid},
         select: {
            id: true,
            name: true,
            img: true,
            email: true,
            phone: true,
            address: true,
            pass:true
          
         }
      })
      return data;
   },
  
  
}