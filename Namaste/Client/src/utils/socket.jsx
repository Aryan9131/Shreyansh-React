import io from 'socket.io-client'

let socket;
const connectSocket=(user_id)=>{
    socket= io("https://legendary-giggle-g6vw7vv9rv42w6vp-8000.app.github.dev",{
        query:`user_id = ${user_id}`
    });
    console.log("Socket connected frontend !")
} 

export {socket, connectSocket}