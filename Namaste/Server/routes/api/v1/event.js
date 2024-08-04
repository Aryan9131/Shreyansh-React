const express=require('express');
const eventController=require('../../../controllers/api/v1/event_controller')
const router=express.Router();



router.get('/',eventController.allEvents)


module.exports=router