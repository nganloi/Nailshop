const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports={
    // EDIT INFORMATION SHOP
    editShop: async (name, email, phone, address, describe, timework, img) => {
        const creat= await prisma.infshop.create({
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
