import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import {Avatar} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import cardData from '../api/chatData'
import chatData from "../api/chatData";
import ChatMsgComponent from "./ChatMsgComponent";
const ChattingDetails = function ({clickedUser}) {
    return (
        <Grid container xs={12} sx={{overflowY:"auto", position:"relative"}}>
            <Grid item xs={12} sx={{ marginBottom:"5px", position:"sticky",top:"0", backgroundColor:"rgba(104, 106,236, 1)",display:"flex",height:"55px", justifyContent:"space-between",alignItems:"center" }}>
                <Box sx={{width:"60%", display: "flex", justifyContent: "flex-start", alignItems: "center", }}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "40px", width: "50px" }} />
                    <Box sx={{ marginLeft: "30px" }}>
                        <p> {clickedUser} </p>
                    </Box>
                </Box>
                <Box sx={{width:"40%",display:"flex",justifyContent:"flex-end"}}>
                    <CallIcon className="navIcon" sx={{marginRight:"10px", color:"white"}}/>
                    <VideocamIcon  className="navIcon" sx={{marginRight:"10px", color:"white"}}/>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{marginTop:"20px"}}>
                {
                    chatData.map((msg)=>{
                        return <ChatMsgComponent msg={msg}/>
                    })
                }
            </Grid>
        </Grid>
    )
}

export default ChattingDetails