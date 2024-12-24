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
   couponOn: async() => {
      const data = await prisma.coupon.findMany({
         where:{active:1},
        include:{
           product:true,
        }
      });
      return data;
     },
   getCoupon: async(userid,sum) => {
      var data = []
      ///Lay ma giam gia ma tat ca nguoi dung deu co
      const data1 = await prisma.coupon.findMany({
         where: {
            active: 1,
            typer: {none:{}},
            user: {none:{}},
         },
        include: {
         product: true,
         category: true
        },
       
      })
      ////Lay ma giam gia cua rieng tung nguoi
      const data2 = await prisma.coupon.findMany({
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
            product: true,
            category: true
         }

      })
      ///Lay ma giam gia theo phan loai nguoi
      const data3 = await prisma.coupon.findMany({
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
            product: true,
            category: true

         }
      })
      for(var i=0; i<data1.length;i++){
         data.push(data1[i])
      }
      for(var i=0; i<data2.length;i++){
         data.push(data2[i])
      }
      for(var i=0; i<data3.length;i++){
         data.push(data3[i])
      }
      return data;
   },

   postOrderCoupon: async(id,idcoupon) => {
     const checkdata = await prisma.order_coupon.findMany({
      where:{
         order: {
            active: 0,
         },
         orderid:id,
      }
   })
     if(checkdata.length > 0){
      const del = await prisma.order_coupon.updateMany({where:{orderid:id},data:{couponid:idcoupon}})
     }else{
      const data = await prisma.order_coupon.create({
         data: {
            orderid: id,
            couponid: idcoupon
         }
        })
   
     }
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