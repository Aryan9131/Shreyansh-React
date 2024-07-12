const express=require('express');
const router=express.Router();
const passportJWT=require('./config/passport-jwt-startegy')

router.use('/api',require('./api'))

router.get('/',(req, res)=>{
    console.log("request come");
    return res.status(200).json({
        message:"hi backend server"
    })
})

module.exports=router