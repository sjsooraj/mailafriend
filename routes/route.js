const router = require('express').Router();
const {signup, getbill} = require('../controller/controller')

router.post('/user/signup',signup)
router.post('/product/getbill',getbill)

module.exports =router;