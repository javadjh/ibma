const mongoose = require('mongoose')
const ReplySchema = new mongoose.Schema({
    star:{
        required:true,
        type:Number
    },
    description:{
        required:true,
        type:String,
        minlength:3,
    },
    userId:{
        required:true,
        type:mongoose.Types.ObjectId
    },
    createDate:{
        default:Date.now,
        type:Date
    }
})
const BusinessInformationSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255
    },
    address:{
        type:String,
        required:true,
        minlength:10,
    },
    tel:{
        type:String,
        required:true
    },
    replays:{
        type:[ReplySchema]
    },
    createDate:{
        default:Date.now,
        type:Date
    },
    buildingId:{
        required:[true,"ساختمان اجباری میباشد"],
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"user"
    }
})
const BusinessInformationModel = mongoose.model("businessInformation",BusinessInformationSchema)
module.exports = BusinessInformationModel
