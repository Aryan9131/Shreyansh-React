const express=require('express');
const passport=require('passport')
const router=express.Router();
const postController=require('../../../controllers/api/v1/post_controller')

router.post('/create-post',passport.authenticate('jwt', {session:false}), postController.createPost);
router.delete('/delete-post/:id', postController.deletePost);

module.exports=router
