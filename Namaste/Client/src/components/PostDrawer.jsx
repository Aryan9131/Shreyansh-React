import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import RadioGroup from './RadioGroup';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import useImgPreview from '../hooks/handleImgPreview'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

export default function ResponsiveDialog({createPost}) {
    const [open, setOpen] = React.useState(false);
    const [img, setImg] = React.useState("");
    const [caption, setCaption] = React.useState("");
    const [postType, setPostType] = React.useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const imgRef = React.useRef(null);
    const { handleMediaChange, mediaUrl, isVideo } = useImgPreview()
    
    let user = useSelector((state) => state.user);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = new FormData();
        formData.forEach((value, key) => {
                if(key=='img'){
                    setImg(value);
                    data.append('file',value);
                }
        });

        data.append('upload_preset','Social-App');
        data.append('cloud_name',"anayak")

        try {
            const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/anayak/image/upload', {
                method: 'POST',
                body: data
            });
            if (!cloudinaryResponse.ok) {
                throw new Error('Failed to upload image');
            }

            const cloudinaryData = await cloudinaryResponse.json();
            const postData = {
                postType: postType,
                data: caption,
                img: cloudinaryData.url,
                user: user._id
            };

            const token = localStorage.getItem('token'); // Make sure 'token' is the string key

            // Second fetch: Create post
            if (cloudinaryResponse.ok) {
                const createPostResponse = await fetch('https://potential-palm-tree-p95qp55vpp7h7vrv-8000.app.github.dev/api/v1/post/create-post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(postData)
                });
    
                if (!createPostResponse.ok) {
                    throw new Error('Failed to create post');
                }
        
                const createPostData = await createPostResponse.json();
                createPost(createPostData.post);
            }
            
            handleClose();
        } catch (error) {
             console.log("error while posting post : " + error);
        }
    };

    return (
        <React.Fragment>
            <IconButton aria-label="share">
                <Button variant="contained" onClick={handleClickOpen} sx={{ display: "flex", alignItems: "center" }}>share <KeyboardArrowRightIcon /></Button>
            </IconButton>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <form action="api/v1/user/post/create-post" method="post" id="post-form" onSubmit={handleSubmit}>
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                            <Box >
                                <RadioGroup required setPostType={setPostType} />
                            </Box>
                            <IconButton aria-label="add to favorites" sx={{ padding: "8px", backgroundColor: "rgba(210, 210, 210, 0.599)", borderRadius: "10px", margin: "15px 5px",width:"30px"}}>
                                <input type="file" name="img" id="file-upload" placeholder="hello" ref={imgRef} hidden onChange={handleMediaChange} />
                                <CameraAltIcon sx={{ height: "15px", width: "15px" }} onClick={() => imgRef.current.click()} />
                            </IconButton>
                            <TextField
                                id="caption"
                                name="caption"
                                label="Caption"
                                multiline
                                maxRows={4}
                                onChange={(e)=>setCaption(e.target.value)}
                            />
                        </Box>
                    </form>
                    <hr />
                    <Box>
                        {isVideo ? <video src={mediaUrl} width="400"></video>
                            : <img src={mediaUrl} width="400" style={{ backgroundSize: "contain" }} />}

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        close
                    </Button>
                    <Button variant="outlined"  type="submit" form="post-form" autoFocus>
                        post
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
