import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';
import { BASE_URL } from '../api/userApi';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function FormDialog({postComments, postId}) {
    if(postComments.length>0){
        for(let comment of postComments){
            console.log(JSON.stringify(comment));
        }
    }
    const [open, setOpen] = React.useState(false);
    let user = useSelector((state) => state.user);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCommentSubmit=async (event) => {
         try {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const text = formJson.text;
            
            const createCommentResponse=await fetch(`${BASE_URL}/comment/create-comment`,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    data:text,
                    post:postId,
                    user:user._id
                })
            })
            if (!createCommentResponse.ok) {
                throw new Error('Failed to create post');
            }
            const createCommentResponseData=await createCommentResponse.json();
            console.log(JSON.stringify(createCommentResponseData))
            handleClose();

         } catch (error) {
            console.log("Error while creating Comment : "+error)
         }
    }

    const ariaLabel = { 'aria-label': 'description' };


    return (
        <React.Fragment>
            <Typography sx={{ display: "flex", alignItems: "center" }} onClick={handleClickOpen}>
                <Input placeholder="Comment" inputProps={ariaLabel} sx={{ width: "90%" }} />
                <SendIcon />
            </Typography>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleCommentSubmit
                }}
            >
                <DialogTitle>Post Comments</DialogTitle>
                <DialogContent sx={{position:"relative"}} >
                    <DialogContentText>
                       <List sx={{ width: '100%', minWidth: 360,height:{xs:"100vh", sm:400, md:200}, bgcolor: 'background.paper' }}>
                        {
                           postComments.length>0
                           ? 
                           postComments.map((comment)=>{ 
                            return (<>
                              <ListItem alignItems="flex-start"> 
                             <ListItemAvatar >
                                <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }} src="https://mui.com/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={comment.user.name}
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                    </Typography>
                                    {comment.data}
                                    </React.Fragment>
                                 }
                            />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            </>)
                           })
                           :
                          "Be the first to comment :)"
                        }
                      </List>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="text"
                        label="Comment"
                        type="text"
                        fullWidth
                        variant="standard"
                        sx={{position:"sticky",bottom:"-21px",marginBottom:"0px", backgroundColor:"whitesmoke"}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">comment</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
