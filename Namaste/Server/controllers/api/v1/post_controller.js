const Post=require('../../../models/Post')
const Comment=require('../../../models/Comment')
module.exports.allPosts=function(req, res){
  
}
module.exports.createPost=async function(req, res){
    try {
        console.log(req.body);
        const newPost=new Post(req.body);
        await newPost.save();
        return res.status(200).json({
            message:"Post Created !",
            post:newPost
        })
    } catch (error) {
        return res.status(404).json({
            message:"Could not Created Post !",
            error:error
        })
    }
}

module.exports.deletePost=async function(req, res){
    try {
        const post=Post.deleteOne({_id:req.params.id});
        const comment=Comment.deleteMany({post:req.params.id});
        return res.status(200).json({
            message:"Post and related Comments deleted !",
            post:post
        })
    } catch (error) {
        return res.status(404).json({
            message:"Could not Delete Post !",
            error:error
        })
    }
}