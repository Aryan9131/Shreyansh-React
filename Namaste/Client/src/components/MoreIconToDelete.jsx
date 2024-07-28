import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 10;

export default function LongMenu({postId, deletePost}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async () => {
    console.log(postId)
    const response=await fetch('',)
    setAnchorEl(null);
  };
  
  const handleDelete=async ()=>{
    if(deletePost){
      deletePost(postId);
    }
    handleClose()
  }

  return (
    <Box>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>  
           Delete
        </MenuItem>
        <MenuItem onClick={handleClose}>  
           Edit
        </MenuItem>
      </Menu>
    </Box>
  );
}
