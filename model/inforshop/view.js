const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 //GET INFORMATION SHOP
    getInforshop:async(req,res)=>{
        const data=await prisma.infshop.findFirst()
        return data
    }
}