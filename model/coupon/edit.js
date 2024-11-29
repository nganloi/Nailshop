const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.coupon.findMany({
      where: {id:id},
      include:{
         product:{
            include:{
               product:true
            }
         },
         user:{
            include:{
               user:true,
            }
         },
         typer:{
            include:{
               typer:true,
            }
         },
         category:{
            include:{
               category:true,
            }
         }
      }
   });
    return data;
   },
   postEdit: async(id,name,buymin,quanlity,discountpercent,discountprice,typer,user,category,product) => {
      const creat = await prisma.coupon.update({where:{id:id},
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
         const delet= await prisma.coupon_product.deleteMany({where:{couponid:id}})
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
       const delet= await prisma.category_coupon.deleteMany({where:{couponid:id}})
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
      const delet= await prisma.typer_coupon.deleteMany({where:{couponid:id}})
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
      const delet= await prisma.user_coupon.deleteMany({where:{couponid:id}})
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
      changeStatus:async(id)=>{
         const data = await prisma.coupon.findMany({where: {id:id}});
         if(data[0].active==1){
            const change = await prisma.coupon.update({where: {id:id},
               data: {
               active:0
               }})
            }else{
            const change = await prisma.coupon.update({where: {id:id},
               data: {
               active:1
               }})
            }
         }
   

   }