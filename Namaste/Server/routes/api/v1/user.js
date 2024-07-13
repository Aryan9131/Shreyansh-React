const express=require('express');
const router=express.Router();
const UserController=require('../../../controllers/api/v1/user_controller')

router.post('/create-user',UserController.createUser)
router.post('/create-session',UserController.createSession)

module.exports=router