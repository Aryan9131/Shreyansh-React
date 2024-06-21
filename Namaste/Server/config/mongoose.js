const mongoose=require('mongoose');

async function main(){
   await mongoose.connect('mongodb+srv://aryannayak9131:cH9kVFZuSKnLJwfD@cluster0.tvyb7p2.mongodb.net/Social?retryWrites=true&w=majority&appName=Cluster0')
}

main().then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(`Error while connecting to Database : ${err}`);
})