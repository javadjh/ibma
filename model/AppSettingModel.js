const mongoose = require('mongoose')

const AppSettingSchema = new mongoose.Schema({
    poolTurnsLimit:{
        type:Number,
        default:20
    },
    payPrice:{
        type:Number,
        default:300000
    },
    buildingId:{
        required:[true,"ساختمان اجباری میباشد"],
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
    notes:{
        type:String,
        required:true
    }
})

const AppSettingModel = mongoose.model("appSetting",AppSettingSchema)

module.exports = AppSettingModel
module.exports.AppSettingSchema = AppSettingSchema
