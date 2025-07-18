const mongoose=require("mongoose");

const tokenSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId(ObjectId),
        required:true,ref:"User"
    },
    tokenId:{
        type:String,required:true
    }
    },{
        timeStamps:true
})
const TokenModel=mongoose.model("Token",tokenSchema)

module.exports=TokenModel;