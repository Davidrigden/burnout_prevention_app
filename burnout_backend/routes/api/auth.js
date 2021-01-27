const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const users = require("../../models/users");

//SHALOM

router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all required fields" });
  }
  users.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exists" });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
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
              UserName:user.UserName,
              FirstName: user.FirstName,
              LastName: user.LastName,
              email: user.email,
              password2: user.password2,
              Phone: user.Phone,
            },
          });
        }
      );
    });
  });
});

//@route Get api/auth/user
//@ desc Get user data
//@ access private

router.get('/user', auth, (req,res)=>{
    users.findById(req.user.id)
    .select('--password')
    .then(user=>res.json(user))
})


module.exports = router;
