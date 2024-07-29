const Post=require('../../../models/Post')
const Comment=require('../../../models/Comment')
const cloudinary=require('cloudinary').v2
module.exports.allPosts=function(req, res){
  
}
module.exports.createPost=async function(req, res){
    try {
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

exports.deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      console.log(`Attempting to delete post with ID: ${postId}`);
      const deletedImgresult = await cloudinary.uploader.destroy(req.body.imgId);
      const result = await Post.findByIdAndDelete({_id: postId});
  
      if (!result) {
        console.log('Post not found');
        return res.status(404).json({ status: 404, message: 'Post not found' });
      }
  
      res.status(200).json({ status: 200, message: 'Post deleted successfully' , imgDeleted: deletedImgresult});
    } catch (error) {
      console.error('Error deleting post:', error.message); // Log only the error message
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  };
  