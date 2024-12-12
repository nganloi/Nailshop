const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   infProduct: async(name,describe,content,price,category,img) => {
      const creat= await prisma.product.create({
         data:{
            name:name,
            describe:describe,
            content:content,
            price:price,
            img:img,
            active:0, //active bật tắt chương trình giảm giá 
            sale:0,
            view:0,
         }
      })
      const data = await prisma.product.findMany({
         where:{
            name:name,
            describe:describe,
            content:content,
            price:price,
            active:0, //active bật tắt chương trình giảm giá 
            sale:0,
            view:0,
         }
      })
      if(category >= 0){
         const creat1 = await prisma.category_product.create({
            data:{productid:data[0].id,categoryid:category}
         })
         }
    return data;
   },
   /////Tạo cart cho user
   creatCart:async(userid,productid,classfyid,quantity)=>{
      var data1 = await prisma.user_product.findMany({
         where:{
            productid:productid,
            userid:userid,
            classfyid:classfyid
         }
      })
      if(data1.length > 0){
        const quantityOld = data1[0].quantity;
        const updat = await prisma.user_product.update({
         where:{
            id:data1[0].id
         },
         data:{
            quantity:parseInt(quantity)+quantityOld
         }
        })
      }else{
         const creat = await prisma.user_product.create({
            data:{
               productid:productid,
               userid:userid,
               classfyid:classfyid,
               quantity:parseInt(quantity)
            }
         }) 
      }
   }
}