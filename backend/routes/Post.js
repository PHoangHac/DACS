const express = require("express");
const router = express.Router();
const {Post} = require("../models");

router.get('/', async(req, res) =>{
    const listAllPost = await Post.findAll();
    res.json(listAllPost);
});

router.post('/', async(req, res) =>{
    const post = req.body;
    await Post.create(post);
    res.json(post);
})


module.exports = router;