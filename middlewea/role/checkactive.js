const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const users = require('../../model/user/view')
async function authorize(active) {
     return async (req, res, next) => {
        const iduser = parseInt(req.session.userId);
        const data = await users.getUser(iduser)
        var check=0;
        for(var i=0 ; i< data.role.length; i++){
            if(data.role[i].role.position != 'User'){
                check=1;
            }
        }
        if(check == 0) {
            res.redirect('/login')
        } else{
            next();
        }
    };
}

module.exports = authorize;
