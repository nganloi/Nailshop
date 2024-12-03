const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');

const blogg = require('../../model/blog/view.js')
const tagg = require('../../model/tag/view.js')
const so = require('../../model/social/view.js')
module.exports = {
    getBlog: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        
        res.render('./dashboard/blog',{user:user})
        const id = parseInt(req.params.ID)|| 1;
       const blog = await blogg.getpageBlog((id-1)*2)
        res.render('./dashboard/blog', {blog:blog})
    },
    getBlogDetail: async(req,res) => {
        const userid = req.session.userid;
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/blog-detail', {user:user})
        const id = parseInt(req.params.ID);
        const blog = await blogg.getBlog(id)
        const  tag = await tagg.tag()
        const social = await so.getSocial()
        res.render('./dashboard/blog-detail',{blog:blog, tag:tag, social:social})
    }
}