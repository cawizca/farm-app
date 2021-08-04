const User = require('../models/UserModel');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saultRounds = 10

router.post("/register", (req,res) =>{
    const name = req.body.name
    const email = req.body.email
    const userRole = req.body.userRole
  
    if(req.body.email == ""){
      res.send({Error:"email empty"})
    }
    if(req.body.name == ""){
      res.send({Error:"name empty"})
    }
    if(req.body.password == ""){
      res.send({Error:"password empty"})
    }else{

    bcrypt.hash(req.body.password ,saultRounds , (err,hash) =>{

      const password = hash

      const newUser = new User({
        email,
        name,
        password,    
        userRole
    })   

    User.findOne({ email: req.body.email }).then((user) =>{
      if(user){
        res.send({Error: "Email aready in use"})
      }else{
        newUser.save().then((user)=>{
          console.log(user)
          res.send({message: "Registration Success"})
      }).catch((err) =>{
          res.send({Error:"user details missing"})
      })}
    }).catch()  
    })
  }
})



router.get("/post",verifyToken,(req, res) =>{
 
  if(req.user){
    res.json(req.user)
  }else{
    res.send({message:"Token not valid"})
  }
})

router.post("/login", async(req,res) =>{

  await User.findOne({ email: req.body.email }).then(  
      (user) => {
       bcrypt.compare(req.body.password, user.password , (err , result) =>{ 
        if(err || !result){
          res.send({message:"Password not valid"})
        }else{
          jwt.sign({user} , 'secretkey', (err, token) =>{
            res.json({token , userRole: user.userRole})
          }) 
        }})
      }).catch(
      (error) => {
        res.send({message: "Invalid Email"})
      }
    );
  })
  
  
  router.put("/update" , (req , res)=>{

  User.findByIdAndUpdate({_id : req.body.id},
    {
    name: req.body.name,
    email: req.body.Email,
    usertype: req.body.Usertype
  }).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })


})


function verifyToken(req , res , next){

const bearerHeader = req.headers['authorization'];
const token = bearerHeader && bearerHeader.split(' ')[1]

if(token == null){
  return res.sendStatus(401)
}else{
  jwt.verify(token, 'secretkey', (err, authData)=>{
    if(err){
      res.sendStatus(403)
    }else{
      req.user = authData
      next()
    }
  })
}
}

module.exports = router; 