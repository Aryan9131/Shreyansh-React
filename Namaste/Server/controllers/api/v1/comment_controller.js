const Comment=require('../../../models/Comment');
const Post=require('../../../models/Post')
exports.createComment=async function(req, res){
     try {
        const newComment= new Comment(req.body);
        await newComment.save();
    
        const post=await Post.findOne({_id:req.body.post});
        post.comments.push(newComment._id);
        await post.save();
    
        return res.status(200).json({
            message:"Comment Posted !",
            comment:newComment
        })
     } catch (error) {
        console.log("Error while Creating comment : "+error);
        return res.status(500).json({
            error:error,
        })
     }
}