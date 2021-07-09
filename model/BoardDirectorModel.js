const mongoose = require('mongoose')

const BoardDirectorSchema = new mongoose.Schema({
    name:{
        minlength:[2,"نام بسیار کوتاه میباشد"],
        required:true,
        type:String
    },
    lastName:{
        minlength:[4,"نام خانوادگی اجباری میباشد"],
        required:true,
        type:String
    },
    homeNumber:{
        type:String,
        required:true
    },
    title:{
        type:String,
        minlength:[2,"عنوان کوتاه میباشد"],
        required:true
    },
    buildingId:{
        required:[true,"ساختمان اجباری میباشد"],
        type:mongoose.Types.ObjectId,
        ref:"building"
    }
})

const BoardDirectorModel = mongoose.model("boardDirector",BoardDirectorSchema)
module.exports = BoardDirectorModel
module.exports.BoardDirectorSchema = BoardDirectorSchema
