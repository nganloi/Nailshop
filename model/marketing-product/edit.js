const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.marketing.findMany({
      where: {id:id},
      include:{
         product:{
            include:{
               product:true,
            }
         }
      }
   });
    return data;
   },
   postEdit: async(id,name,img,describe,product) => {
      const data = await prisma.marketing.update({where: {id:id},
      data: {
         name: name,
         img: img,
         describe:describe,
      }})

      ///kiểm tra có product được chọn không 
      if(product != undefined){
         //xóa dữ liệu cũ trong marketing_product
         const del = await prisma.marketing_product.deleteMany({where:{marketingid:id}})
         //Thêm dữ liệu mới vào marketing_product
         for(var i=0 ; i< product.length; i++){
            const creat1=await prisma.marketing_product.create({
               data:{
               productid:parseInt(product[i]),
               marketingid:id
               }
            })   
         }
      }
   },
   ////CHANGE ACTIVE
   changeStatus:async(id)=>{
      const data = await prisma.marketing.findMany({where: {id:id}});
      if(data[0].active==1){
         const change = await prisma.marketing.update({where: {id:id},
            data: {
            active:0
            }})
         }else{
         const change = await prisma.marketing.update({where: {id:id},
            data: {
            active:1
            }})
         }
      }

}