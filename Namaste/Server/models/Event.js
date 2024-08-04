const mongoose=require('mongoose');
const eventSchema=new mongoose.Schema({
    heading:{
        type:String
    },
    data:{
        type:String
    },
    img:{
        type:Object
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    intrestedUsers:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"User"
        }
    ]
},{
    timestamps:true
})

const Event=mongoose.model('Event', eventSchema);

module.exports=Event