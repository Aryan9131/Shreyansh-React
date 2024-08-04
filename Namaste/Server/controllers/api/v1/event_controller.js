const Event=require('../../../models/Event')
module.exports.allEvents=async function(req, res){
    try {
        const allEvents=await Event.find().populate('user').populate('interestedUsers')
        return res.status(200).json({
            message:'all Events !',
            allEvents:allEvents
        })
    } catch (error) {
        console.log("Error while fethcing Events form DB : "+error)
        return res.status(200).json({
            message:'Error while feching Events :',
            error:error
        })
    }
}