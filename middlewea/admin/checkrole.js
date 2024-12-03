const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    checkRole: async(req,res,next) => {
        const data = await prisma.role.findMany({
            where: {position:'User'}
        })
        if(data.length <= 0) {
            const create = await prisma.role.create({
                data: {
                    position: 'User'
                }
            })
        } 
        const data1 = await prisma.role.findMany({
            where: {position:'User'}
        })
        if(data1.length <= 0) {
            res.redirect('/register')
        } else{
            next();
        }
    }
}