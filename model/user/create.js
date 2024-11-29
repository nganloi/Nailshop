const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   postCreate: async(name,mail,phone,address,pass,role) => {
    const data = await prisma.user.create({
        data: {
            name:name,
            email:mail,
            phone: phone,
            address:address,
            pass: pass,
            role: {
                create: role.map(roleid => ({
                    roleid: parseInt(roleid), 
                })),
            }
        }
    })
   
       
       if(role != undefined){
           for(var i=0 ; i< role.length ; i++){
              const creat1=await prisma.role_user.create({
                 data:{
                 roleid:parseInt(role[i]),
                 userid:data.id
                 }
              })   
           }
       }
    return data;
   },
}