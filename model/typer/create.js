const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,user) => {
        const creat = await prisma.typer.create({
        data: {
           name: name
        }});
        ////Lấy thông tin role vừa tạo
        const data = await prisma.typer.findMany({
         where:{name:name}
        });
        ////Nếu có user được chọn thì thay đổi typerid
        if(user != undefined){
            for(var i=0 ; i< user.length ; i++){
               const creat1=await prisma.typer_user.create({
                  data:{
                  userid:parseInt(user[i]),
                  typerid:data[0].id
                  }
               })   
            }
        }
     },
  }