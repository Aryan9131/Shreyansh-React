import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreIconToDelete from './MoreIconToDelete'
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';
import FormDialog from './CommentDrawer'

export default function GeneralCard({ post, deletePost, onClick }) {
  const [expanded, setExpanded] = React.useState(false);
  const createdAt = new Date(post.createdAt);
  const today = new Date();

  const isToday = createdAt.toDateString() === today.toDateString();
  const displayTime = isToday
    ? createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : createdAt.toLocaleDateString('en-US', { year: '2-digit', month: 'numeric', day: 'numeric' });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function handleClick(e) {
    e.target.style.color = "red"
  }




  return (
    <Card sx={{ maxWidth: 300, minWidth: { sx: 260, md: 300 }, marginBottom: "15px", boxShadow: '0', border: "0px", borderRadius: "15px", padding: "10px 20px", boxSizing: "border-box" }}  >
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px" }} />
        }
        action={
          deletePost ?
            <IconButton aria-label="settings">
              <MoreIconToDelete post={post} deletePost={deletePost} />
            </IconButton>
            : null
        }
        title="Aryan Nayak"
        subheader={displayTime}
      />
      <Box onClick={onClick}>
        <CardMedia
          component="img"
          height="194"
          image={post.img.url}
          alt="Paella dish"
          sx={{ borderRadius: "10px", display: post.img ? "block" : "none" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.data}
          </Typography>
        </CardContent>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={(e) => { handleClick(e) }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
      <Box >
         <FormDialog postComments={post.comments} postId={post._id}/>
      </Box>
    </Card>
  );
}
