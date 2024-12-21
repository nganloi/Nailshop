const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 classfy:async(req,res,next)=>{
          const id = parseInt(req.params.ID)
          const data = await prisma.product.findMany({
            where:{id:id},
            include:{
              classfy:true,
            }
          })
          if(data[0].classfy.length > 0){
            next();
          }else{
            res.redirect(`/admin/product/classfys/${id}`)
          }
 }
}