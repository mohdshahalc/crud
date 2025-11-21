const express=require('express')
const controller=require("../controller/controller")
const auth=require("../midleware/auth")
const validation=require("../midleware/validation")
const  route=express.Router()

route.post("/signup",validation,controller.singup)
route.get("/login",controller.login)
route.get("/profile",auth,controller.profile)

module.exports=route