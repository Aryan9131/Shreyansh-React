import { Box } from "@mui/material"

const ChatMsgComponent=function({msg}){

     switch (msg.type) {
        case 'img':
            return( <h1>this is img</h1> )
            break;
        case 'text':
            return( <h1>this is text</h1> )
            break;
        case 'pdf':
            return( <h1>this is pdf</h1> )
            break;
        case 'mp3':
            return( <h1>this is mp3</h1> )
            break;
                           
        default:
            return( <h1>NOTHING</h1> )
            break;
     }
}

export default ChatMsgComponent