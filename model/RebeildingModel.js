const mongoose = require('mongoose')
const RebuildingSchema = new mongoose.Schema({
    //add to app setting
    /*rule:{
        type:String,
        required:true
    },
    ruleFile:{
        type:String
    },*/
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
const RebuildingModel = mongoose.model("rebuilding",RebuildingSchema)
module.exports = RebuildingModel
