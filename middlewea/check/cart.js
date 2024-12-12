const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 cart:async(req,res,next)=>{
          const userid = parseInt(req.session.userId);
          const productid = parseInt(req.params.ID)
          const classfyid = req.body.product
          if(classfyid !=''){
            next();
          }else{
            res.redirect(`/product/${productid}`)
          }
 }
}