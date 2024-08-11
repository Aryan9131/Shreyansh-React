import io from 'socket.io-client'

let socket;
const connectSocket=(user_id)=>{
    socket= io("https://cuddly-space-xylophone-p95qp55vjpw264v7-8000.app.github.dev",{
        query:`user_id = ${user_id}`
    });
    console.log("Socket connected frontend !")
} 

export {socket, connectSocket}