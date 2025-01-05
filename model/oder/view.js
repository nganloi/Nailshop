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
    getPageOder:async(page,quantity)=>{
        const data = await prisma.order.findMany({
            where:{active:1},
            skip:page,
            take:quantity,
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
    getPageOderConfirm:async(page,quantity)=>{
        const data = await prisma.order.findMany({
            where:{active:2},
            skip:page,
            take:quantity,
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
    },
    getoder:async(iduser)=>{
        const data= await prisma.order.findMany({
            where:{userid:iduser,active:0}

           })
        return data;
    },
}