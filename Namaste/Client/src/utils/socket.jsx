import io from 'socket.io-client'

let socket;
const connectSocket=(user_id)=>{
    socket= io("https://effective-fortnight-9wg4jggv5rqh7rw-8000.app.github.dev",{
        query:`user_id = ${user_id}`
    });
    console.log("Socket connected frontend !")
} 

export {socket, connectSocket}