const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const users = require("../../models/users");


//@ Get request to api/Users
//@ desc Get all pets
//@ access Public

router.get('/', (req,res)=>{
    users.find()
    .sort({date:-1})
    .then(users=> res.json(users))
    
})

//@ Get request to api/Users by id
//@ desc Get all User by id
//@ access Private

router.get("/:id", (req,res)=>{
  users.findOne({token: req.params.id})
  .then(user=> res.json(user))
})


// PUT
router.put("/:id", async (req, res) => {
  const user = await users.findById(req.params.id)

  user.scores.push(req.body.score)
  await user.save()
  res.json(user)

})

//@ POST request to api/Users
//@ desc POST User
//@ access Public

router.post("/", (req, res) => {
const {FirstName, LastName, email, password, password2, Phone, type } = req.body;
 if (!email || !password || !password2 || !FirstName || !LastName) {
     return res.status(400).json({ msg: "Please enter all required fields" });
   }
  users.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const validateUserSignup = [
      body("email").isEmail(),
      body("firstName").exists(),
      body("firstName").isLength({ min: 1 }),
      body("lastName").exists(),
      body("lastName").isLength({ min: 1 }),
      body("userName").exists(),
      body("userName").isLength({ min: 4 }),
      body("password1").isLength({ min: 8 }),
      body("password1").exists(),
      body("password2").custom((value, { req }) => {
        if (value !== req.body.password1) {
          throw new Error("Password confirmation does not match password");
        }
        return true;
      }),
    ];
    
    const handleValidationErrors = (req, res, next) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        next();
      } else {
        let message = "";
        for (let k = 0; k < errors.array().length; k++) {
          message =
            message +
            errors.array()[k].msg +
            " for " +
            errors.array()[k].param +
            ". ";
        }
        res.json({ loggedIn: false, message: message });
      }
    };
    const newUser = new users({
      FirstName,
      LastName,
      email,
      password,
      password2,
      Phone,
      type
    });
    // create salt&hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.password2 = newUser.password;
        newUser.save().then((user) => {
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
        });
      });
    });
  });
});

module.exports = router;
