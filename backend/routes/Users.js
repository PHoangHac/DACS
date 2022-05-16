const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken");


router.post('/', async(req, res) =>{
   const {username, password} = req.body;
   bcrypt.hash(password, 10).then((hash) =>{
      Users.create({
         username: username,
         password: hash,
      });
      res.json("Success !")
   })
})

router.post("/login", async(req, res) =>{
   const {username, password} = req.body;
   const user = await Users.findOne({where: {username: username}});

   if(!user)
      res.json({error: "User doesn't not Exist !"});

    bcrypt.compare(password, user.password).then(async (match) =>{
      if(!match) 
         res.json({error: "Wrong username and password !"});

      const accessToken = sign({
         username: user.name, id: user.id
      }, "importantsecret");

      res.json(accessToken);
      // res.json("You logged in !");
   });
})

module.exports = router;