import { Box } from "@mui/material"
import {Typography} from "@mui/material"
const TxtComponent=function({msg}){
    return(
        <Box sx={{margin:"10px 1px",backgroundColor:"rgba(239, 242,249, 1)", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:msg.isSent ? "flex-end" : "flex-start"}}>
            <Box >
            <Typography sx={{backgroundColor:msg.isSent ? "rgba(104, 106,236, 1)":"white", padding:"6px 15px" ,borderRadius:"10px", color:msg.isSent ? "white" :"grey"}}>
                 {msg.data}
            </Typography>
            </Box>
        </Box>
    )
}
const ImgComponent=function({msg}){
    return(
        <Box sx={{ zIndex:10 ,margin:"10px 1px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:msg.isSent ? "flex-end" : "flex-start"}}>
            <Box sx={{border:"0.01px solid lightBlue", borderRadius:"15px"}} >
            <Box >
                <img src={msg.url} alt="img" style={{width :"200px", height:"150px", borderRadius:"15px"}}/>
            </Box>
            <Typography sx={{padding:"5px 15px"}}>
                 {msg.data}
            </Typography>
            </Box>
        </Box>
    )
}
const ChatMsgComponent=function({msg}){

     switch (msg.type) {
        case 'img':
            return( <ImgComponent msg={msg}/> )
        case 'text':
            return(<TxtComponent msg={msg}/> )
        case 'pdf':
            return( <h1>this is pdf</h1> )
        case 'mp3':
            return( <h1>this is mp3</h1> )
                           
        default:
            return( <h1>NOTHING</h1> )
     }
}

export default ChatMsgComponent