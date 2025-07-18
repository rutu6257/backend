const mongoose=require("mongoose");

const ratingSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,
        required:true,ref:"User"
    },
     productId:{type:mongoose.Schema.Types.ObjectId,
        required:true,ref:"Product"
     },
     rating:{type:Number,min:1,max:5,required:true},
     review:{type:String}
    },{
        timeStamps:true
})
const RatingModel=mongoose.model("Rating",ratingSchema)

module.exports=RatingModel;