const mongoose=require('mongoose');

const oneToOneSchema= new mongoose.Schema({
   participants:[
    {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }
   ],
   messages:[
       {
            to:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'User'
            },
            from:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'User'
            },
            types:{
                type:String,
                enum:['Text', 'Media' , 'Document' , 'Link']
            },
            created_at:{
                type:Date,
                default:Date.now()
            },
            text:{
                type:String
            },
            file:{
                type:String
            },
       }
   ]
})

