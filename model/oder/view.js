const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
module.exports = {
    oder:async()=>{
        const data = await prisma.order.findMany({
            where:{active:1},
            include:{
                product:{
                    include:{
                        product:true,
                        classfy:true,
                    }
                },
                user:true,
            }
        })
        return data
    },
    oderConfirm:async()=>{
        const data = await prisma.order.findMany({
            where:{active:2},
            include:{
                product:{
                    include:{
                        product:true,
                        classfy:true,
                    }
                },
                user:true,
            }
        })
        return data
    },
    checkoder:async(id)=>{
        const up= await prisma.order.update({
            where:{id:id},
            data:{
                active:2,
            }
        })
    }
}