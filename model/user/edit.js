const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(genId) => {
    const data = await prisma.user.findUnique({where: {id:genId}});
    return data;
   },
   postProfile: async(userid,name,mail,phone,add,img) => {
      const data = await prisma.user.update({
       where: {id:userid},
         data: {
            name:name,
            email: mail,
            phone: phone,
            address: add,
            img: img,
         }
      })
      return data;

   },
   postPass: async(userid,newpass) => {
     const data = await prisma.user.update({
      where: {id: userid},
      data: {
         pass: newpass
      }
     })
     return data;

   }


}