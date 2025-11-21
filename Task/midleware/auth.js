const jwt=require('jsonwebtoken')
require('dotenv').config()
let key=process.env.JWT_SECRET

 let auth=(req,res,next)=> {

    try {
          let  header=req.headers["authorization"]
          let token=header && header.split(" ")[1]
          if(!token)  return res.status(404).json("provide the token")
        let verify=jwt.verify(token,key)
        req.userId=verify.id     
        next()
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
}
 module.exports=auth
