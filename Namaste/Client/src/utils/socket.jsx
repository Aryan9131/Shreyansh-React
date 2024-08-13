import io from 'socket.io-client'

let socket;
const connectSocket=(user_id)=>{
    socket= io("https://supreme-space-fortnight-vwj7qjj4rw73xxv6-8000.app.github.dev",{
        query:`user_id = ${user_id}`
    });
    console.log("Socket connected frontend !")
} 

export {socket, connectSocket}