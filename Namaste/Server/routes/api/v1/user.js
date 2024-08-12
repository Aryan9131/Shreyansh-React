const express=require('express');
const passport=require('passport')
const router=express.Router();
const UserController=require('../../../controllers/api/v1/user_controller')

router.post('/create-user',UserController.createUser)
router.post('/create-session',UserController.createSession)
router.get('/:id/posts', UserController.allPosts);
router.post('/addEvent', UserController.addEventToUser);
router.get('/get-friends',passport.authenticate('jwt', {session:false}), UserController.getAllFriends)
router.get('/get-friend-request',passport.authenticate('jwt', {session:false}), UserController.getAllFriendRequests)
router.get('/get-users',UserController.getAllUSers)
module.exports=router