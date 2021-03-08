const user = require('../models/demoModel')
const mongoose = require('mongoose')
exports.demo = (req,res) =>{
    const data = user.find({})
    .then(result => {
        res.json(result)
    })
    
}