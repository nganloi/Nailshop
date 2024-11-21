const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.category.findMany({where: {id:id},include:{product:{include:{product:true}}}});
    return data;
   },
   postEdit: async(id,name,product) => {
      const data = await prisma.category.update({where: {id:id},
      data: {
         name: name,
      }});
      
      ////Kiểm tra có sự thay đổi của product được chọn cho category
      if(product != undefined){
         ////Xóa dữ liệu cũ trong bảng category_product
         const dele=await prisma.category_product.deleteMany({where:{categoryid:id}})
         ////Taọ mới dữ liệu productud và categoryid trong bảng category_product
         for(var i=0 ; i< product.length; i++){
            const creat1=await prisma. category_product.create({
               data:{
               productid:parseInt(product[i]),
               categoryid:id
               }
            })   
         }
         }
      }

   }