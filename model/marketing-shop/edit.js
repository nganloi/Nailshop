const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.marketing_shop.findMany({where: {id:id}});
    return data;
   },
   postEdit: async(id,name,img,link,describe ) => {
      const data = await prisma.marketing_shop.update({where: {id:id},
      data: {
         name: name,
         img: img,
         link:link,
         describe:describe,
      }})
   },
   ////CHANGE ACTIVE
   changeStatus:async(id)=>{
      const data = await prisma.marketing_shop.findMany({where: {id:id}});
      if(data[0].active==1){
         const change = await prisma.marketing_shop.update({where: {id:id},
            data: {
            active:0
            }})
         }else{
         const change = await prisma.marketing_shop.update({where: {id:id},
            data: {
            active:1
            }})
         }
   
      }

}