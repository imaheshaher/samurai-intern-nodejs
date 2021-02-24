const express = require('express');
const router = express.Router();
const {demo} = require('../controllers/demoController');

router.get('/demo',demo)


module.exports=router