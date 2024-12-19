const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
module.exports = {
    create: async (carts, quantity, iduser, address) => {
        var orderid
        const oder = await prisma.order.findMany({/////lấy dữ liệu id oder chưa xác nhận mua hàng và chưa oder
            where: {
                userid: iduser,
                active: 0,
            }
        });
        ////kiểm tra nếu chưa có oder 
        if (oder.length <= 0) {
            const cre1 = await prisma.order.create({ data: { userid: iduser, active: 0, address: address } })
            const getoder = await prisma.order.findFirst({
                where: {
                    userid: iduser,
                    active: 0,
                    product: {
                        none: {},
                    },
                },
                select: {
                    id: true,
                }
            })
            orderid = getoder.id;
        } else {
            orderid = oder[0].id
            const dele = await prisma.order_product.deleteMany({ where: { orderid: orderid } })
        }
        ////Them san pham vao gio hang
        if (carts > 0) {
            const dataproduct = await prisma.user_product.findFirst({where:{id:parseInt(carts)}})
            const crea = await prisma.order_product.create({
                data: {
                    order:{
                        connect:{id:orderid}
                    },
                    quantity: parseInt(quantity[0]),
                    product: {
                        connect: { id:dataproduct.productid} // Kết nối với sản phẩm có ID là productid
                    },
                    classfy:{
                        connect:{id:dataproduct.classfyid}
                    }
                }
            });
        } else {
            for (var i = 0; i < carts.length; i++) {
                const dataproduct = await prisma.user_product.findFirst({where:{id:parseInt(carts[i])}})
                const crea = await prisma.order_product.create({
                    data: {
                        order:{
                            connect:{id:orderid}
                        },
                        product: {
                            connect: { id:dataproduct.productid} // Kết nối với sản phẩm có ID là productid
                        },
                        classfy:{
                            connect:{id:dataproduct.classfyid}
                        },
                        quantity: parseInt(quantity[i]),
                    }
                })
            }
        }
    },
    getOder:async(userid)=>{
        const data = await prisma.order.findMany({
            where:{userid:userid,active:0},
            include:{
                product:{
                    include:{
                        product:true,
                        classfy:true,
                    }
                }
            }
        })
        return data
    },
    oder:async(userid,oderid,address)=>{
       const up = await prisma.order.updateMany({
        where:{
            userid:userid,
            id:oderid,
            active:0,
        },
        data:{
            active:1,
            address:address,
        }
       })
       const dataProduct = await prisma.order_product.findMany({
        where:{orderid:oderid}
       })
       for(var i=0; i< dataProduct.length; i++){
        const del= await prisma.user_product.deleteMany({
          where:{
            userid:userid,
            productid:dataProduct[i].productid,
            classfyid:dataProduct[i].classfyid
          }
        })
      }
    }
}