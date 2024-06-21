const express=require('express');
const router=express.Router();


router.use('/api',require('./api'))

router.get('/',(req, res)=>{
    return res.status(200).json({
        message:"hi backend server"
    })
})

module.exports=router