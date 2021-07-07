const mongoose = require('mongoose')

const AdsBoardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"عنوان اجباری میباشد"],
        minlength:[2,"عنوان بسیار کوتاه میباشد"],
        maxlength:[100,"عنوان بسیار بلند میباشد"]
    },
    image:{
        type:String,
        required:[true,"عنوان اجباری میباشد"],
    },
    url:{
        type:String,
        required:[true,"عنوان اجباری میباشد"],
    },
    buildingId:{
        required:[true,"ساختمان اجباری میباشد"],
        type:mongoose.Types.ObjectId,
        ref:"building"
    }
})

const AdsBoardModel = mongoose.model("adsBoard",AdsBoardSchema)
module.exports = AdsBoardModel
module.exports.AdsBoardSchema = AdsBoardSchema
