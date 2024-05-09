import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideocamIcon from '@mui/icons-material/Videocam';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

export default function PostCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <Card id="card" sx={{ maxWidth: 345 ,backgroundColor: "rgba (72, 50,133, 0)", padding:"20px", border:"none", boxShadow: "none", textAlign:"center" }}>
          <CardHeader
            avatar={
              <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                  sx={{ width: 36, height: 36 }}
                  variant="rounded"
                />
            }
            subheader="What are You Thinking ?"
          />
      <CardActions disableSpacing>
        <IconButton aria-label="Take Picture">
          <CameraAltIcon />
        </IconButton>
        <IconButton aria-label="Take Video">
          <VideocamIcon />
        </IconButton>
        <IconButton aria-label="Add Files">
          <AddIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
         <Button variant="contained" href="#contained-buttons" style={{display:"flex", alignItems:"center",textTransform:"capitalize"}}>
             Share<ArrowForwardIosIcon fontSize="xs"/>
        </Button>
        </ExpandMore>
      </CardActions>
    </Card>
  );
}