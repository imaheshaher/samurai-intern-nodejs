const mongoose = require('mongoose')

let url="mongodb+srv://samurai_vishal:samurai@cluster0.hujhr.mongodb.net/samurai_mahesh"


mongoose.connect(url,{
    useNewUrlParser:true
},(err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('conneted..')
    }
})