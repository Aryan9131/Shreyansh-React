import io from 'socket.io-client'
import { BACKEND_URL } from '../api/userApi';
let socket;
const connectSocket = (user_id) => {
    socket = io(BACKEND_URL, {
        query: { user_id: user_id }
    });
    console.log("Socket connected frontend!");
}

export {socket, connectSocket}