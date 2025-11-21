

let validate=(req,res,next)=>{
  const {email,password}=req.body
    if(password.length<4){
        return res.status(400).json({message:"password must be more than 4 letters"})
    }else if(!(email.includes("@gmail.com"))){
         return res.status(400).json({message:"Enter valid email"})
    }
  next()
}

module.exports=validate