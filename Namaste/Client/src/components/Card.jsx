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
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function GeneralCard({ post, img, deletePost, onClick }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function handleClick(e) {
    e.target.style.color = "red"
  }
  const ariaLabel = { 'aria-label': 'description' };

   

   
  return (
    <Card sx={{ maxWidth: 300, minWidth: {sx:260, md:300}, marginBottom: "15px", boxShadow: '0', border: "0px", borderRadius: "15px", padding: "10px 20px", boxSizing: "border-box" }}  >
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px" }} />
        }
        action={
          deletePost ? 
          <IconButton aria-label="settings">
              <MoreIconToDelete postId={post._id} deletePost={deletePost} />
          </IconButton>
          : null   
        }
        title="Aryan Nayak"
        subheader="5 min ago"
      />
      <Box onClick={onClick}>
        <CardMedia
          component="img"
          height="194"
          image={post.img}
          alt="Paella dish"
          sx={{ borderRadius: "10px", display: img ? "block" : "none" }}
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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <Input placeholder="Comment" inputProps={ariaLabel} sx={{ width: "90%" }} />
        <SendIcon />
      </Typography>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
