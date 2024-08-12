const express=require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const db=require('./config/mongoose');
const cors=require('cors');
const passport=require('passport');
const passportJWT=require("./config/passport-jwt-strategy")
const cloudinary = require('cloudinary').v2;
const dotenv =require('dotenv')
const app=express();
const port=8000;
const server=createServer(app);

const io = new Server(server, {
    cors: {
        origin: [
            "https://effective-fortnight-9wg4jggv5rqh7rw-8000.app.github.dev",
            "https://effective-fortnight-9wg4jggv5rqh7rw-5173.app.github.dev"
        ],
        methods: ['GET', 'POST']
    }
});


dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

app.use('/',require('./routes'))

io.on('connection', async (socket) => {
    const user_id=socket.handshake.query["user_id"];
    const socket_id=socket.id
    console.log('a user connected'+socket.id);
    if(Boolean(user_id)){
        await User.findByIdAndUpdate(user_id, {socket_id})
    }
});

server.listen(port, (err) => {
    if(err){
        console.log(`error which listening server : ${err}`)
    }else{
        console.log(`server is listening at port : ${port}`)
    }
});
