const mongoose = require('mongoose')

const BuildingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"عنوان اجباری میباشد"],
        min:[2,"عنوان بسیار کوتاه میباشد"],
    },
    adminId:{
        required:[true,"ساختمان بدون مدیر نمیتواند باشد"],
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
})

const BuildingModel = mongoose.model("building",BuildingSchema)

module.exports = BuildingModel
module.exports.BuildingSchema = BuildingSchema
