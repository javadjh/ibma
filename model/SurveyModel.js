const mongoose = require("mongoose")
const OptionsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
})

const SurveySchema = new mongoose.Schema({
    title:{
        minlength:2,
        maxlength:500,
        required:true,
        type:String
    },
    description:{
        type:String
    },
    isMultiSelect:{
        type:Boolean,
        required:true
    },
    isShowResult:{
        type:Boolean,
        required:true
    },
    dateSendToArchive:{
        type:Date,
        required:true
    },
    targets:{
        type:[String],
        enum:['resident','headHousehold','owner','all'],
        required:true
    },
    options:{
        type:[OptionsSchema],
        required:true
    },
    answers:{
        type:[OptionsSchema]
    },
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
    createDate:{
        type:Date,
        default:Date.now
    }
})
const SurveyModel = mongoose.model("survey",SurveySchema)
module.exports = SurveyModel
