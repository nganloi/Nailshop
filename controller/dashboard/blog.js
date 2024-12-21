const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');
const blogg = require('../../model/blog/view.js')
const tagg = require('../../model/tag/view.js')
const so = require('../../model/social/view.js')
const comment = require('../../model/blog/create.js')
const now = new Date();
const day = now.getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[now.getMonth()];
const year = now.getFullYear();
const hours = now.getHours();
module.exports = {
    getBlog: async(req,res) => {
      const userid = parseInt(req.session.userId)
      const data = await blogg.Blog();
      const idpage=parseInt(req.params.ID)||1;
      var numberpage='';
      if(data.length> Math.round(data.length/3)*3){
          numberpage= Math.round(data.length/3)+1;
         }else{
             numberpage= Math.round(data.length/3);
         }
        const page=(idpage-1)*3
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
       const blog = await blogg.getpageBlog(page)
        res.render('./dashboard/blog', {blog:blog,user:user,number:numberpage,page:idpage})
    },
    getBlogDetail: async(req,res) => {
        const id = parseInt(req.params.ID);
        const userid = req.session.userid;
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const blog = await blogg.getBlog(id)
        
        const social = await so.getSocial()
        res.render('./dashboard/blog-detail',{blog:blog, social:social,user:user})
    },
    postCom:  async(req,res) => {
        const time = `${hours,day}`; 
        const content = req.body.content;
        const user = parseInt(req.session.userId);
        const blog = parseInt(req.params.ID);

        const createPro =  await comment.postCreateCom(time,content,user,blog);
        return res.redirect(`/blog/${blog}`)
      
    
    }
}