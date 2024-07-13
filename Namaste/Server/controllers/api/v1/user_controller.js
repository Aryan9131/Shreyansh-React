const User=require('../../../models/User');
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
        console.log(req.body);
        const user= await User.findOne({email:req.body.email});
        if(!user || req.body.password!=user.password){
           return res.status(422).json({
               message:"Invalid username/password"
           })
        }
        return res.status(200).json({
           message:"SignIn successful !",
           data:{
               token:jwt.sign(user.toJSON(), "Social", {expiresIn:"10000"})
           }
        })
     } catch (error) {
        console.log("Error while signing in :"+error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
     }
}