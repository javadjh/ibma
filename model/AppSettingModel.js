const mongoose = require('mongoose')

const AppSettingSchema = new mongoose.Schema({
    poolTurnsLimit:{
        type:Number,
        default:[true,20]
    },
    payPrice:{
        type:Number,
        default:[true,300000]
    }
})

const AppSettingModel = mongoose.model("appSetting",AppSettingSchema)

module.exports = AppSettingModel
module.exports.AppSettingSchema = AppSettingSchema
