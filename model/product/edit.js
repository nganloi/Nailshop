const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
      getEditInfproduct: async (id) => {
         const data = await prisma.product.findMany({
           where: {
             id: id, // ID sản phẩm
           },
           include: {
             category:{
               include:{
                  category:{
                     include:{
                        coupon:{
                           include:{
                              coupon:true,
                           }
                        }
                     }
                  }
               }
             }, // Bao gồm quan hệ `category`
             coupon:{
               include:{
                  coupon:true,
               }
             },   // Bao gồm quan hệ `coupon`
             classfy: true,
             review:{
               include:{
                  user:true,
               }
             },
           },
         });
         return data;       
   },
   postEditProduct:async(name,describe,content,price,category,img,id)=>{
         const creat= await prisma.product.update({
            where:{id:id},
            data:{
               name:name,
               describe:describe,
               content:content,
               price:price,
               img:img,
            }
         })
         if(category >= 0){
            const dele = await prisma.category_product.deleteMany({where:{productid:id}})
            const creat1 = await prisma.category_product.create({
               data:{productid:id,categoryid:category}
            })
            }
   },
   changeStatus:async(id)=>{
      const data = await prisma.product.findMany({where: {id:id}});
      if(data[0].active==1){
         const change = await prisma.product.update({where: {id:id},
            data: {
            active:0
            }})
         }else{
         const change = await prisma.product.update({where: {id:id},
            data: {
            active:1
            }})
         }

   },
   ////classfys
   createClassfy:async(name,quantity,id)=>{
      const creat=  await prisma.classfy.create({
         data:{
            name:name,
            quantity:quantity,
            img:'',
            productid:id
         }
      })
   },
   editClassfy:async(name,quantity,id)=>{
      const edits= await prisma.classfy.update({
         where:{id:id},
         data:{
            name:name,
            quantity:quantity,
            img:'',
         }
      })
      const data = await prisma.classfy.findMany({
         where:{id:id}
      })
      return data
   },
   deleteClassfys:async(id)=>{
      const data = await prisma.classfy.findMany({
         where:{id:id}
      })
      const del= await prisma.classfy.deleteMany({where:{id:id}})
      return data
   },
   ////
   deleteCoupon:async(id)=>{
      const data = await prisma.coupon_product.findMany({
         where:{id:id}
      })
      const del= await prisma.coupon_product.deleteMany({where:{id:id}})
      return data
   },
   changeCoupon:async(id,coupon)=>{
      if(coupon != undefined){
         const delet= await prisma.coupon_product.deleteMany({where:{productid:id}})
          for(var i=0 ; i< coupon.length ; i++){
             const creat1=await prisma.coupon_product.create({
                data:{
                productid:id,
                couponid:parseInt(coupon[i])
                }
             })   
          }
      }
   },
   changeCategory:async(id,category)=>{
      if(category >= 0){
         const dele = await prisma.category_product.deleteMany({where:{productid:id}})
         const creat1 = await prisma.category_product.create({
            data:{productid:id,categoryid:category}
         })
      }
   },
   editdiscount:async(id,discount,active)=>{
      const update = await prisma.product.update({
         where:{id:id},
         data:{
            discount:discount,
            active:active
         }
      })
   }
}