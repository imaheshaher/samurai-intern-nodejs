const user = require('../models/demoModel')
const mongoose = require('mongoose')
exports.demo = (req,res) =>{
    const data = user.insertMany({name:'mahesh',dob:new Date('2000-10-09')})
    .then(result => {
        res.json(result)
    })
    
}