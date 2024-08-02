const User=require('../../../models/User');
const Post=require('../../../models/Post')
const jwt=require('jsonwebtoken');

module.exports.createUser=async function(req, res){
    console.log(req.body);
    const newUser=new User(req.body);
    newUser.save();
    return res.status(200).json({
        message:"User created successfully !",
        user:newUser
    })
}

module.exports.createSession=async function(req, res){
     try {
        const user= await User.findOne({email:req.body.email});
        if(!user || req.body.password!=user.password){
           return res.status(422).json({
               message:"Invalid username/password"
           })
        }
        return res.status(200).json({
           message:"SignIn successful !",
           data:{
               token:jwt.sign(user.toJSON(), "Social", {expiresIn:"500000"})
           }
        })
     } catch (error) {
        console.log("Error while signing in :"+error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
     }
}
module.exports.allPosts=async function(req, res){
    try {
        const userPosts=await Post.find({user:req.params.id}).populate('user').populate({
            path:'comments',
            populate:{
              path:'user',
              model:'User'
            }
        });
        console.log(userPosts[0]);
        const allPosts = await Post.find({user:{$ne:req.params.id}}).populate('user').populate({
            path:'comments',
            populate:{
              path:'user',
              model:'User'
            }
        });;

        return res.status(200).json({
            userPosts:userPosts,
            allPosts:allPosts
        })
    } catch (error) {
        console.log("error while find post of user :"+error);
        return res.status(522).json({
            error:error
        })
    }
}