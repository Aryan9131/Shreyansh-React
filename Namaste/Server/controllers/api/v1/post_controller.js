const Post=require('../../../models/Post')
const Event=require('../../../models/Event')

const Comment=require('../../../models/Comment')
const cloudinary=require('cloudinary').v2

module.exports.allPosts=function(req, res){
  
}
module.exports.createPost=async function(req, res){
    try {
         if(req.body.postType=='Post'){
            const newPost=new Post(req.body);
            await newPost.save();
            return res.status(200).json({
                message:"Post Created !",
                post:newPost
            })
         }else{
            const newEvent=new Event(req.body);
            await newEvent.save();
            return res.status(200).json({
                message:"Event Created !",
                post:newEvent
            })
         }
    } catch (error) {
      console.log('Error while creating Post : '+error)
        return res.status(404).json({
            message:"Could not Created Post !",
            error:error
        })
    }
}
 
exports.updatePost=async function(req, res){
     try {
      let prePost=await Post.findOne({_id:req.params.id});
      if(prePost){
        const deletedImgresult = await cloudinary.uploader.destroy(prePost.img.id);
      }
      prePost.postType=req.body.postType;
      prePost.img=req.body.img;
      prePost.data=req.body.data;
      await prePost.save();
      return res.status(200).json({
         message:"post Updated",
         updatedPost:prePost
      })
     } catch (error) {
       console.log("Error while updatng post : "+error)
        return res.status(500).json({
          message :"Not able to Update Post",
          error :error
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
  