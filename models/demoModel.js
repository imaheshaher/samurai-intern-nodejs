const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    dob:Date
})


const user=mongoose.model('userdemo',userSchema)

module.exports=user

