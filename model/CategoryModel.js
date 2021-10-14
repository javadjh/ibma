const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    mainCategoryId:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
    isMain:{
        type:Boolean,
        default:true,
        required:true
    }
})
const CategoryModel = mongoose.model("category",CategorySchema)
module.exports = CategoryModel
