const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const users = require("../../models/users");

//SHALOM

router.post('/', (req,res)=>{
  console.log(req.body)
    users.findOne({email: req.body.email}).then(user => {
      if(user){
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });
        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                FirstName: user.FirstName,
                LastName: user.LastName,
                email: user.email,
                password2: user.password2,
                Phone: user.Phone,
                type: user.type
              },
            });
          }
        );
        })
      } else {
        res.status(400).json({msg:"user not found"})
      }
    })
  })

  module.exports = router