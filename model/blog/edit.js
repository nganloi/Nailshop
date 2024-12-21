const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   getEdit: async(id) => {
      const data = await prisma.blog.findUnique({
       where: {
           id: id
       }
      })
       return data;
   },
   postEdit: async(id,name,img,des,content, time, tag) => {
      const data = await prisma.blog.update({where: {id:id},
      data: {
         img: img,
         name:name,
         describe: des,
         content: content,
         time: time
      }});
      
      
       if(tag>=0) {
         const dele1 = prisma.tag_blog.deleteMany({where: {blogid:id}})
         const data1 = prisma.tag_blog.create({
            data: {
               blogid: id,
               tagid: tag
            }
         })

       }
  
     
 
   },

}