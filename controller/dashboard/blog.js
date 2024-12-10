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
        const id = parseInt(req.params.ID)|| 1;
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
       const blog = await blogg.getpageBlog((id-1)*2)
        res.render('./dashboard/blog', {blog:blog,user:user})
    },
    getBlogDetail: async(req,res) => {
        const userid = req.session.userid;
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const id = parseInt(req.params.ID);
        const blog = await blogg.getBlog(id)
        const  tag = await tagg.tag()
        const social = await so.getSocial()
        res.render('./dashboard/blog-detail',{blog:blog[0], tag:tag, social:social,user:user})
    },

    postCom:  async(req,res) => {
        const blog = parseInt(req.params.ID);
        const content = req.body.content;
        const user = parseInt(req.session.userId);
        const time=`${month} ${day},${year}`;
        const createPro =  await comment.postCreateCom(content,user,blog,time);
        return res.redirect(`/blog/${blog}`)
      
    
    },
}