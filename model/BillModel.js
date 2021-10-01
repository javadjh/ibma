const mongoose = require('mongoose')
const BillSchema = new mongoose.Schema({
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    type:{
        type:String,
        enum:['water','gas','electricity'],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
    homeNumber:{
        type:Number,
        required:true
    },
    createDate:{
        default:Date.now,
        type:Date
    }

})
const BillModel = mongoose.model("bill",BillSchema)
module.exports = BillModel
