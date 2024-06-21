const express=require('express');
const db=require('./config/mongoose')
const app=express();
const port=8000;
app.use(express.urlencoded())
app.use('/',require('./routes'))

app.listen(port, (err)=>{
    if(err){
        console.log(`error which listening server : ${err}`)
    }else{
        console.log(`server is listening at port : ${port}`)
    }

})