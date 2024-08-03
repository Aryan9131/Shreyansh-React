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
import MenuPopper from './MenuPopper';
import { useEffect } from 'react';

export default function FormDialog({ postComments, postId }) {
    if (postComments.length > 0) {
        for (let comment of postComments) {
            console.log(JSON.stringify(comment));
        }
    }
    const [open, setOpen] = React.useState(false);
    let user = useSelector((state) => state.user);
    const [readOnlyStates, setReadOnlyStates] = React.useState({});
    const [updatedCommentData, setUpdatedCommentData] = React.useState('')
    useEffect(() => {
        let obj = {}
        postComments.map((comment) => {
            const commentId = comment._id
            obj[commentId] = true;
        })
        setReadOnlyStates(obj)
    }, [postComments])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (commentId) => {
        if (commentId)
            handleReadOnlyStates(commentId, true)
        setOpen(false);
    };
    const handleReadOnlyStates = (commentId, value) => {
        let obj = {};
        obj[commentId] = value
        setReadOnlyStates((prev) => ({ ...prev, ...obj }))
        console.log("updated->" + JSON.stringify(readOnlyStates))
    }
    const handleEditCommentSubmit = (event, commentId) => {
        event.preventDefault();
        console.log(updatedCommentData);
        handleClose(commentId);
    };
    const handleCommentSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const text = formJson.text;

            const createCommentResponse = await fetch(`${BASE_URL}/comment/create-comment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: text,
                    post: postId,
                    user: user._id
                })
            })
            if (!createCommentResponse.ok) {
                throw new Error('Failed to create post');
            }
            const createCommentResponseData = await createCommentResponse.json();
            console.log(JSON.stringify(createCommentResponseData))
            handleClose();

        } catch (error) {
            console.log("Error while creating Comment : " + error)
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
                <DialogContent sx={{ position: "relative" }} >
                    <DialogContentText>
                        <List sx={{ width: '100%', minWidth: 400, height: { xs: "100vh", sm: 400, md: 300 }, boxSizing: "border-box", overflowY: "scroll", bgcolor: 'background.paper' }}>
                            {
                                postComments.length > 0
                                    ?
                                    postComments.map((comment, key) => {
                                        const readOnly = readOnlyStates[comment._id]
                                        return (
                                            <>
                                                <ListItem alignItems="flex-start" id={comment._id}>
                                                    <ListItemAvatar >
                                                        <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }} src="https://mui.com/static/images/avatar/3.jpg" />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={comment.user ? comment.user.name : 'guest'}
                                                        secondary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="text.primary"
                                                                >
                                                                </Typography>
                                                                <form onSubmit={(event) => handleEditCommentSubmit(event, comment._id)}>
                                                                    <TextField
                                                                        id={comment._id + "_textField"}
                                                                        multiline
                                                                        maxRows={6}
                                                                        variant="standard"
                                                                        InputProps={{
                                                                            readOnly: readOnly,
                                                                        }}
                                                                        defaultValue={comment.data}
                                                                        onChange={(e) => setUpdatedCommentData(e.target.value)}
                                                                        sx={{
                                                                            width: "100%",
                                                                            '& .MuiInput-underline:before': {
                                                                                borderBottom: 'none',
                                                                            },
                                                                            '& .MuiInput-underline:hover:before': {
                                                                                borderBottom: 'none',
                                                                            },
                                                                            '& .MuiInput-underline:after': {
                                                                                borderBottom: 'none',
                                                                            },
                                                                            '& .MuiInput-underline :hover': {
                                                                                borderBottom: 'none'
                                                                            }
                                                                        }}
                                                                    />
                                                                    <Button size="small" type="submit" sx={{ width: "100%", display: readOnlyStates[comment._id] ? 'none' : 'flex', justifyContent: 'flex-end', textTransform: 'lowercase' }}>edit</Button>
                                                                </form>

                                                            </React.Fragment>
                                                        }
                                                    />

                                                    {/* to Edit the comments */}
                                                    {comment.user._id == user._id ? <MenuPopper commentId={comment._id} handleReadOnlyStates={handleReadOnlyStates} /> : null}

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
                        id="name"
                        name="text"
                        label="Comment"
                        type="text"
                        fullWidth
                        variant="outlined"
                        sx={{ position: "sticky", bottom: "-21px", marginTop: "15px", backgroundColor: "whitesmoke" }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose()}>Cancel</Button>
                    <Button type="submit">comment</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
