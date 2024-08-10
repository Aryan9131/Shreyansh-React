import io from 'socket.io-client'

let socket;
const connectSocket=(user_id)=>{
    socket= io("https://fictional-chainsaw-46p9wpp4gj9f65-8000.app.github.dev",{
        query:`user_id = ${user_id}`
    });
    console.log("Socket connected frontend !")
} 

export {socket, connectSocket}