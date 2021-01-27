// const express = require("express");
// const app = express();
// const port = 3000;



// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const express= require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const path =require('path')
const config=require('config')

const app=express();

 app.use(express.json())
 app.use(cors())
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const db= config.get('mongoURI')
 mongoose.connect(db,{
   useNewUrlParser:true,
   useCreateIndex:true,
   useFindAndModify: true
  } )
 .then(()=>console.log('Mongo DB Connected....'))
 .catch(err=>console.log(err));

 app.get("/", (req, res) => {
  res.send("Hello World!");
});

 app.use('/api/users', require('./routes/api/Users'))
 //app.use('/api/auth', require('./routes/api/auth'))
 app.use('/api/login',require('./routes/api/login'))
 


const port = process.env.PORT ||5000;
 
 app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  