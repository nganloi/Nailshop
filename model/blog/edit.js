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
      
      const blog = await prisma.blog.findUnique({where: {id:id}});
      const blog_tag = await prisma.tag_blog.create({
         data: {
             blogid: blog,
             tagid: parseInt(tag)
         }
     })
     return {data,blog_tag}

   },

}