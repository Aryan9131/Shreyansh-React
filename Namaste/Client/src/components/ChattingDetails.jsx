import { Box } from "@mui/material"
import Grid from '@mui/material/Grid';
import {Avatar} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
const ChattingDetails = function ({clickedUser}) {
    return (
        <Grid container xs={12}>
            <Grid item xs={12} sx={{backgroundColor:"purple",display:"flex",height:"50px", justifyContent:"space-between",alignItems:"center" }}>
                <Box sx={{width:"60%", display: "flex", justifyContent: "flex-start", alignItems: "center", }}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" variant="rounded" sx={{ borderRadius: "15px", height: "45px", width: "55px" }} />
                    <Box sx={{ marginLeft: "30px" }}>
                        <p> {clickedUser} </p>
                    </Box>
                </Box>
                <Box sx={{width:"40%",display:"flex",justifyContent:"flex-end"}}>
                    <CallIcon className="navIcon" sx={{marginRight:"10px", color:"white"}}/>
                    <VideocamIcon  className="navIcon" sx={{marginRight:"10px", color:"white"}}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
        </Grid>
    )
}

export default ChattingDetails