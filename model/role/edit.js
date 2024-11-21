const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
    const data = await prisma.role.findMany({where: {id:id},include:{user:{include:{user:true}}}});
    return data;
   },
   postEdit: async(id,name,user) => {
      const data = await prisma.role.update({where: {id:id},
      data: {
         position: name,
      }});
      
      ////Kiểm tra có sự thay đổi của user được chọn cho role
      if(user != undefined){
         ////Xóa dữ liệu cũ trong bảng role_user
         const dele=await prisma.role_user.deleteMany({where:{roleid:id}})
         ////Taọ mới dữ liệu userid và Roleid trong bảng role_user
         for(var i=0 ; i< user.length ; i++){
            const creat1=await prisma.role_user.create({
               data:{
               userid:parseInt(user[i]),
               roleid:id
               }
            })   
         }
      }

   },
}