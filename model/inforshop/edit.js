const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports={
    // EDIT INFORMATION SHOP
    editShop: async (name, email, phone, address, describe, timework, img) => {
        const updates= await prisma.infshop.update({
            where:{id:1},
            data: {
                name: name,
                email: email,
                phone: phone,
                address: address,
                describe: describe,
                timework: timework,
                img: img,
            },
        });
    },
};
