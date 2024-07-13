const express=require('express');
const db=require('./config/mongoose');
const cors=require('cors');
const passport=require('passport');
const passportJWT=require("./config/passport-jwt-strategy")
const app=express();
const port=8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use('/',require('./routes'))

app.listen(port, (err)=>{
    if(err){
        console.log(`error which listening server : ${err}`)
    }else{
        console.log(`server is listening at port : ${port}`)
    }

})