import io from 'socket.io-client'
import { createContext, useContext, useMemo } from 'react'
import {BASE_URL} from '../api/chatData'

const SocketContext=createContext();
 
const getSocket=()=>useContext(SocketContext);

const SocketProvider=({children})=>{
    const socket = useMemo(()=>{
        io(BASE_URL)
    })

   return(
       <SocketContext.Provider value={socket}>
           {children}
       </SocketContext.Provider>
   )
}

export {SocketProvider, getSocket}