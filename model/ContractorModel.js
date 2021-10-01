const mongoose = require('mongoose')

const ContractorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minlength:5,
        maxlength:80
    },
    job:{
        type:String,
        minlength:2,
        maxlength:255,
        required:true
    },
    phoneNumber:{
        type:String,
        minlength:11,
        maxlength:11,
        required:true
    },
    description:{
        type:String,
        minlength:10,
        required:true
    },
    profile:{
        required:true,
        type:String
    },
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
})
const ContractorModel = mongoose.model("contractor",ContractorSchema)
module.exports = ContractorModel
