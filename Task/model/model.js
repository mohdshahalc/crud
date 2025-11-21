const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/test")

const schema=mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String,
        min:3
    }
})

let model=mongoose.model("users",schema)

module.exports=model

