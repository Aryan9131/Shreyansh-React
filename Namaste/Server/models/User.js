const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    mobile:{
        type:Number
    },
    posts:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref :'Post'
        }
      ],
    friends:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref :'User'
        }
      ],
    events:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref :'Event'
        }
      ],
    avatar:[
        {
            type:mongoose.SchemaTypes.ObjectId,
        }
    ],
    status:{
        type:Boolean
    },
    socket_id:{
        type:String
    },
    friendStatus:{
        type:"String",
        enum:['pending', 'true', 'false'],
        default:"false"
    }
})

const User=mongoose.model('User', userSchema);
module.exports=User;
