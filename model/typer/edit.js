const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.typer.findMany({where: {id:id},include:{user:{include:{user:true}}}});
    return data;
   },
   postEdit: async(id,name,user) => {
      const data = await prisma.typer.update({where: {id:id},
      data: {
         name:name,
      }});
      
      ////Kiểm tra có sự thay đổi của user được chọn cho typer
      if(user != undefined){
         ////Xóa dữ liệu cũ trong bảng typer_user
         const dele=await prisma.typer_user.deleteMany({where:{typerid:id}})
         ////Taọ mới dữ liệu userid và typerid trong bảng typer_user
         for(var i=0 ; i< user.length ; i++){
            const creat1=await prisma.typer_user.create({
               data:{
               userid:parseInt(user[i]),
               typerid:id
               }
            })   
         }
      }

   },
}