const mongoose = require('mongoose')
const MovingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"user"
    },
    homeNumber:{
        type:Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    timeStart:{
        type:String,
        minlength:1,
        maxlength:10,
        required:true
    },
    deadline:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    buildingId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"building"
    },
    createDate:{
        required:true,
        default:Date.now,
        type:Date
    }
})
const MovingModel = mongoose.model("moving",MovingSchema)
module.exports = MovingModel
