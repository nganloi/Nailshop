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
      time: true,
      comment: {
         select: {
            content: true,
            time: true,
           user: {
            select: {
               name: true,
               img: true
            }
           }
         }
      }
     }
    });
    
    return data;
   },
   getpageBlog: async(page) => {
      const data = await prisma.blog.findMany({
         skip:page,
         take: 3,
         select: {
          id: true,
          img: true,
          name: true,
          describe: true,
          content: true,
          time: true,
          comment: {
            select: {
               content: true,
               time: true,
              user: {
               select: {
                  name: true,
                  img: true
               }
              }
            }
         }
         }
        });
        return data;

   },
   getBlog: async(id) => {
      const data = await prisma.blog.findUnique({
         where: {id:id},
         select: {
            id: true,
            describe: true,
            content: true,
            name: true,
            img: true,
            time: true,
            comment: {
               select: {
                  content: true,
                  time: true,
                 user: {
                  select: {
                     name: true,
                     img: true
                  }
                 }
               }
            },
            tag:{
               select:{
                  tag:{
                     select:{
                        name:true,
                     }
                  }
               }
            }
         },
         
      });
      
      return data;
     },


     getComment: async() => {
      const data = await prisma.comment.findMany({
         include:{
            user:true,
            blog:true,
         }
      });
      
      return data;
     },
     getdeleCom: async(id) => {
      const data1 =await prisma.comment.deleteMany({where: {id:id}})
     return {data1};
  },


     
}