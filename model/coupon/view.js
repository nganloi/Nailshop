const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   coupon: async() => {
    const data = await prisma.coupon.findMany({
      include:{
         product:true,
      }
    });
    return data;
   },
   getCoupon: async(userid,sum) => {
      var data = []
      const data1 = await prisma.coupon.findMany({
         where: {
            active: 1,
            typer: {none:{}},
            product: {none: {}},
            user: {none:{}},
              
          
         },
        include: {
         typer: true,
         product: true,
         category: true

        },
       
      })
      const coupon = await prisma.coupon.findMany({
         where: {
            active: 1,
            user: {
               some: {
                  userid: userid
               }
            },
            buymin: {
               lt: sum
            },
         },
         include: {
            typer: true,
            product: true,
            category: true
         }

      })
      const data2 = await prisma.coupon.findMany({
         where: {
            active: 1,
            typer: {
               some: {
                  typer:{
                     user: {
                        some: {
                           userid: userid
                        }
                     }
                  }
               }
            }
         },
         include: {
            typer: true,
            product: true,
            category: true

         }
      })
      for(var i=0; i<data1.length;i++){
         data.push(data1[i])
      }
      for(var i=0; i<coupon.length;i++){
         data.push(coupon[i])
      }
      for(var i=0; i<data2.length;i++){
         data.push(data2[i])
      }
      return data;
   },

   postOrderCoupon: async(id,idcoupon) => {
     const data = await prisma.order_coupon.create({
      data: {
         orderid: id,
         couponid: idcoupon
      }
     })
     return data
   },
   getConponoder:async(idoder)=>{
      const data=await prisma.coupon_oder.findMany({
        where:{
          order:{
            active:0,
            id:idoder,
          },
        },
        include:{
          coupon:{
            include:{
              category:true,
              product:true,
            }
          }
        }
      })
      return data
    },
   
}