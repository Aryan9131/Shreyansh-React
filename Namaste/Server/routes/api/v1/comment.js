const express=require('express');
const router=express.Router();
const commentController=require('../../../controllers/api/v1/comment_controller')


router.post('/create-comment',commentController.createComment)

module.exports=router