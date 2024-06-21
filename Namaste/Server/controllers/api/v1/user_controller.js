const User=require('../../../models/User');

module.exports.createUser=async function(req, res){
    console.log(req.body);
    const newUser=new User(req.body);
    newUser.save();
    return res.status(200).json({
        message:"User created successfully !",
        user:newUser
    })
}