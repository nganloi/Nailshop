const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,product) => {
        const creat = await prisma.category.create({
        data: {
           name: name
        }});
        ////Lấy thông tin category vừa tạo
        const data = await prisma.category.findMany({
         where:{name:name}
        });
        ////Nếu có product được chọn thì thay đổi
        if(product != undefined){
            for(var i=0 ; i< product.length ; i++){
               const creat1=await prisma.category_product.create({
                  data:{
                  productid:parseInt(product[i]),
                  categoryid:data[0].id
                  }
               })   
            }
        }
     },
  }