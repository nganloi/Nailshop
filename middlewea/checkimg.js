const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports={
 ///////checkimg
 checkImg:async(anh,data)=>{
     var img
     if(anh==undefined){
        if(data.img!= undefined){
            img= data.img
        }else{
            img='/assets/images/blog-2.jpg'
        }
     }else{
        img= '/assets/upload/'+anh.filename
     } 
     return img
 }
}