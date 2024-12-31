const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={

    getContact:async(req,res)=>{
        const data=await prisma.contact.findMany()
        return data
    },
    getPage:async(page,quantity)=>{
        const data=await prisma.contact.findMany({skip:page,take:quantity})
        return data
    },
    postContact: async(name,email,phone,subject,message) => {
        const data = await prisma.contact.create({
            data: {
                name: name,
                email: email,
                phone: phone.toString(), 
                subject: subject,
                message: message,
            }
        })
        return data;
    },
    viewContact: async(id) => {
        const data = await prisma.contact.findUnique({where:{id:id}});
        return data;
    },
    deletContact: async(id) => {
        const data = await prisma.contact.deleteMany({where:{id:id}});
        
    }
}