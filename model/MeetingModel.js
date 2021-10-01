const mongoose = require('mongoose')
const MeetingSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:['public','private'],
        required:true
    },
    date:{
        type:Date,
        required:true,
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:255
    },
    description:{
        type:String,
        required:true,
        minlength:2,
    },
    file:{
        type:String,
    },
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
})
const MeetingModel = mongoose.model("meeting",MeetingSchema)
module.exports = MeetingModel
