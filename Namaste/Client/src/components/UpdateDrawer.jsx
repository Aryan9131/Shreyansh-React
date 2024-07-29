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
import {Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../api/userApi';
export default function UpdateDrawer({post}) {
    const [open, setOpen] = React.useState(false);
    const [postType, setPostType] = React.useState(post.postType);
    const [imgFile, setImgFile] = React.useState(null);
    const [caption, setCaption] = React.useState(post.data);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const imgRef = React.useRef(null);
    const { handleMediaChange, mediaUrl, isVideo , clearMedia, setMedia} = useImgPreview(post.img.url, setImgFile)
    const [closeIconVisible, setCloseIconVisible] = React.useState(true);

    let user = useSelector((state) => state.user);
    const handleClickOpen = () => {
        setMedia(post.img.url)
        setOpen(true);
    };
    useEffect(() => {
        console.log("Updated imgFile:", imgFile);
      }, [imgFile]);
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(imgFile){

        }else{

        }
        // if imgFile is nul this means img is not changed so no need to upload
        // img in cloudinary just set newImgObj's imgUrl to post.img.url and 
        // imgId=post.img.id
        // else delete the post.img.id (previous img of post fom cloudinary) and upload the image and set newImgObj's imgUrl to return cloudinary img url and id
        const updatedPost={
            postType:postType,
            img:newImgUrl,
            data:caption,
        }
        console.log(updatedPost)
    }
    const handleRemovePreview=()=>{
        console.log("clicked handle");
        setCloseIconVisible(false)
        clearMedia();
    }
    return (
        <React.Fragment>
                <p onClick={handleClickOpen} >Edit</p>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" sx={{textAlign:"center"}}>
                    {"Update Post"}
                </DialogTitle>
                <DialogContent>
                    <form action="api/v1/user/post/update-post" method="post" id="update-post-form" onSubmit={handleSubmit}>
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                            <Box >
                                <RadioGroup required setPostType={setPostType} postType={postType} />
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
                                value={caption}   
                                onChange={(e)=>setCaption(e.target.value)}                             
                            />
                        </Box>
                    </form>
                    <hr />
                    <Box sx={{position:"relative"}}>
                        {isVideo ? <video src={mediaUrl} width="400"></video>
                            : <img src={mediaUrl} width="400" style={{ backgroundSize: "contain" }} />}

{closeIconVisible && (
              <CloseIcon
                sx={{
                  color: 'black',
                  backgroundColor: 'rgba(150, 150, 200, 0.897)',
                  borderRadius: '45%',
                  fontSize: '30px',
                  height: '30px',
                  position: 'absolute',
                  top: '1%',
                  right: '2%',
                  cursor: 'pointer',
                }}
                onClick={handleRemovePreview}
              />
            )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        close
                    </Button>
                    <Button variant="outlined"  type="submit" form="update-post-form" autoFocus>
                        post
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
