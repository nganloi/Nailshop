const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    ///REVIEW///
    review:async(req,res)=>{
        const data = await prisma.review.findMany({
            include:{
                user:true,
                product:true,
            }
        })
        return data
    },
    getPage:async(page,quantity)=>{
        const data = await prisma.review.findMany({
            skip:page,
            take:quantity,
            include:{
                user:true,
                product:true,
            }
        })
        return data
    },
    delete:async(id)=>{
        const del = await prisma.review.deleteMany({
            where:{
                id:id
            }
        })
    }
}