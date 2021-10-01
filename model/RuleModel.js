const mongoose = require('mongoose')

const RuleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:300
    },
    description:{
        type:String,
        required:true,
        minlength:2,
    },
    file:{
        type:String
    },
    createDate:{
        type:Date,
        default:Date.now,
    },
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
})
const RuleModel = mongoose.model("rules",RuleSchema)
module.exports = RuleModel
