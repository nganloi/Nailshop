const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 //GET INFORMATION SHOP
    getInforshop:async(req,res)=>{
        const data1=await prisma.infshop.findMany();
        if(data1.length==0){
            const creat= await prisma.infshop.create({
                data:{
                    name:'',
                    email:'',
                    phone:'',
                    address:'',
                    describe:'',
                    timework:'',
                    img:''
                }
            })
        }
        const data=await prisma.infshop.findFirst();
        return data
    }
}