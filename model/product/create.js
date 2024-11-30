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
}