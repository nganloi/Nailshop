const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,user) => {
        const creat = await prisma.role.create({
        data: {
           position: name
        }});
        ////Lấy thông tin role vừa tạo
        const data = await prisma.role.findMany({
         where:{position:name}
        });
        ////Nếu có user được chọn thì thay đổi roleid
        if(user != undefined){
            for(var i=0 ; i< user.length ; i++){
               const creat1=await prisma.role_user.create({
                  data:{
                  userid:parseInt(user[i]),
                  roleid:data[0].id
                  }
               })   
            }
        }
     },
  }