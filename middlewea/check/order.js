const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 order:async(req,res,next)=>{
    const idproduct = req.body.products
    if(idproduct != undefined){
      next();
    }else{
      res.redirect(`/cart`)
    }
 }
}