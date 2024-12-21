const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,img,des,content, time, tag ) => {
      const creat = await prisma.blog.create({
         data: {
            img: img,
            name:name,
            describe: des,
            content: content,
            time: time
         }});
         ////Lấy thông tin blog vừa tạo
         const data = await prisma.blog.findMany({
          where:{ 
            img: img,
            name:name,
            describe: des,
            content: content,
            time: time}
         });
         ////Nếu có tag được chọn thì thay đổi tagid
         if(tag != undefined){
             for(var i=0 ; i< tag.length ; i++){
                const creat1=await prisma.tag_blog.create({
                   data:{
                   tagid:parseInt(tag[i]),
                   blogid:parseInt(data[0].id)
                   }
                })   
             }
      }
   },
   postCreateCom: async(time,content,user,blog) => {
      const create =  await prisma.comment.create({
          data: {
              content: content,
              time:time,
              userid: parseInt(user),
              blogid: parseInt(blog)
          }
      })
      return create;
   }
}