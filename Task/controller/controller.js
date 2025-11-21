const userModel = require("../model/model");
const passwordHash=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const key = process.env.JWT_SECRET 


exports.singup= async function(req,res) {
   try {

     let {email,password}=req.body
     let user=await userModel.findOne({email})
    if(user) return res.status(400).send("email is already registered")
    
     let hashedPassword=await passwordHash.hash(password,10)
     await userModel.create({ email, password: hashedPassword });
     res.status(200).send("register successfully")

   } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", error: error.message });
   }
}

exports.login=async (req,res)=>{
    try {
        let {email,password}=req.body
        let user=await userModel.findOne({email})
        let checkPass= await passwordHash.compare(password,user.password)
        if(!checkPass) return res.send("password is not match")
        let token=jwt.sign({id:user._id},key,{expiresIn:"10m"})
        res.status(200).json({message:"login success",token:token})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

exports.profile=async(req,res)=>{
    
    
   const id=req.userId
   const user=await userModel.findOne({_id:id})
   res.status(200).json({user:user})
   
}






