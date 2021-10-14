const mongoose = require('mongoose')
const BuyAndSellSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"user"
    },
    title:{
        type:String,
        minlength:3,
        maxlength:255,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:10
    },
    isConfirm:{
        type:Boolean,
        default:false
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:[String],
    },
    category:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        minlength:11,
        maxlength:11,
    },
    isShowUserInformation:{
        type:Boolean,
        default:false
    }
})
const BuyAndSellModel = mongoose.model("buyandsell",BuyAndSellSchema)
module.exports = BuyAndSellModel
