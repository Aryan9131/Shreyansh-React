const express=require('express');
const router=express.Router();
const postController=require('../../../controllers/api/v1/post_controller')

router.post('/create-post', postController.createPost);

module.exports=router
