const mongoose = require('mongoose')

const TargetsEnum = ["all","user"]

const LetterSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"عنوان اجباری میباشد"],
        maxlength:[250,"عنوان بسیار بلند میباشد"],
        minlength:[3,"عنوان بسیار کوتاه میباشد"],
    },
    target:{
        type:String,
        enum:TargetsEnum,
        default:TargetsEnum[0],
        required:[true,"هدف نامه اجباری میباشد"]
    },
    message:{
        type:String,
        required:[true,"متن اجباری میباشد"],
        minlength:[5,"متن بسیار کوتاه میباشد"],
    },
    createDate:{
        default:Date.now,
        type:Date
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
})

const LetterModel = mongoose.model("letter",LetterSchema)

module.exports = LetterModel
module.exports.LetterSchema = LetterSchema
