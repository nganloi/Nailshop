const {PrismaClient, Prisma} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    postCreate: async(name,link,img) => {
        const data = await prisma.soicial.create({
            data: {
                name:name,
                link:link,
                img: img
            }
        })
        return data;
    }
}