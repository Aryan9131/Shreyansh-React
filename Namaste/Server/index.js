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

const io = new Server(server);


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

io.on('connection', (socket) => {
    console.log('socket -> '+socket.handshake)
    console.log('a user connected'+socket.id);
  });

server.listen(port, (err) => {
    if(err){
        console.log(`error which listening server : ${err}`)
    }else{
        console.log(`server is listening at port : ${port}`)
    }
});
