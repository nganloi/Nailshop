const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,buymin,quanlity,discountpercent,discountprice,typer,user,category,product) => {
        const creat = await prisma.coupon.create({
        data: {
         name:name,
         buymin:buymin,
         quantity:parseInt(quanlity),
         discountpercent:discountpercent,
         discountprice:discountprice,
         active:0,
        }})
        ////Lấy thông tin category vừa tạo
        const data = await prisma.coupon.findMany({
         where:{
            name:name,
            buymin:buymin,
            quantity:parseInt(quanlity),
            discountpercent:discountpercent,
            discountprice:discountprice,   
            active:0,
         }
        });
        ////Nếu có product được chọn thì thay đổi
        if(product != undefined){
            for(var i=0 ; i< product.length ; i++){
               const creat1=await prisma.coupon_product.create({
                  data:{
                  productid:parseInt(product[i]),
                  couponid:data[0].id
                  }
               })   
            }
        }
        if(category != undefined){
         for(var i=0 ; i< category.length ; i++){
            const creat1=await prisma.category_coupon.create({
               data:{
               categoryid:parseInt(category[i]),
               couponid:data[0].id
               }
            })   
         }
     }
     if(typer != undefined){
      for(var i=0 ; i< typer.length ; i++){
         const creat1=await prisma.typer_coupon.create({
            data:{
            typerid:parseInt(typer[i]),
            couponid:data[0].id
            }
         })   
      }
  }
  if(user != undefined){
   for(var i=0 ; i< user .length ; i++){
      const creat1=await prisma.user_coupon.create({
         data:{
         userid:parseInt(user [i]),
         couponid:data[0].id
         }
      })   
   }
}
     },
  }