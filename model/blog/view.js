const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
   Blog: async() => {
    const data = await prisma.blog.findMany({
     select: {
      id: true,
      img: true,
      name: true,
      describe: true,
      content: true,
      time: true
     }
    });
    return data;
   },
   getpageBlog: async(blog) => {
      const data = await prisma.blog.findMany({
         skip: blog,
         take: 4,
         select: {
          id: true,
          img: true,
          name: true,
          describe: true,
          content: true,
          time: true
         }
        });
        return data;

   },
   getBlog: async(id) => {
      const data = await prisma.blog.findMany({
         where: {id:id},
       select: {
        img: true,
        name: true,
        describe: true,
        content: true,
        time: true
       }
      });
      
      return data;
     },
}