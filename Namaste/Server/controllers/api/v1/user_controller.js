const User = require('../../../models/User');
const Post = require('../../../models/Post');
const FriendRequest = require('../../../models/FriendRequest')

const jwt = require('jsonwebtoken');

module.exports.createUser = async function (req, res) {
    console.log(req.body);
    const newUser = new User(req.body);
    newUser.save();
    return res.status(200).json({
        message: "User created successfully !",
        user: newUser
    })
}

module.exports.createSession = async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || req.body.password != user.password) {
            return res.status(422).json({
                message: "Invalid username/password"
            })
        }
        return res.status(200).json({
            message: "SignIn successful !",
            data: {
                token: jwt.sign(user.toJSON(), "Social", { expiresIn: "500000" })
            }
        })
    } catch (error) {
        console.log("Error while signing in :" + error);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports.addEventToUser = async function (req, res) {
    try {
        const user = await User.findOne({ _id: req.body.userId });
        user.events.push(req.body.eventId);
        await user.save();
        return res.status(200).json({
            message: "Event Added to user's interest List"
        })
    } catch (error) {
        console.log("Error while adding event to interest list : " + error)
        return res.status(500).json({
            message: "Event can't be Added to interest list",
            error: error
        })
    }
}
module.exports.allPosts = async function (req, res) {
    try {
         console.log("user : "+req.user)
        const userPosts = await Post.find({ user: req.params.id }).populate('user').populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'User'
            }
        });
        const allPosts = await Post.find({ user: { $ne: req.params.id } }).populate('user').populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'User'
            }
        });;

        return res.status(200).json({
            userPosts: userPosts,
            allPosts: allPosts
        })
    } catch (error) {
        console.log("error while find post of user :" + error);
        return res.status(522).json({
            error: error
        })
    }
}

module.exports.getAllFriendRequests=async function(req, res){
    try {
        console.log("userId in getAllFriendRequests  : "+req.user._id);

        const requests=await FriendRequest.find({recipient : req.user._id}).populate('sender');
        return res.status(200).json({
            message:"found All friend requests",
            data : requests,
            status:"success"
        })
    } catch (error) {
        console.log("Error while finding friend Requests : " + error);
        return res.status(522).json({
            message:"Error while finding friend Requests",
            error : error,
            status:"error"
        })
    }    
}

module.exports.getAllFriends=async function(req, res){
    try {
        const user_id=req.user._id
        console.log("userId in getAllFriends : "+user_id);
        const friends=await User.find({_id:user_id}).populate('friends');
        return res.status(200).json({
            message:"found All friends",
            data : friends,
            status:"success"
        })
    } catch (error) {
        console.log("Error while finding friends : " + error);
        return res.status(522).json({
            message:"Error while finding friends",
            error : error,
            status:"error"
        })
    }    
}
