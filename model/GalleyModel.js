const mongoose = require('mongoose')
const GallerySchema = new mongoose.Schema({
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
    file:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now
    },
    thumbnail:{
        type:String,
    }
})
const GalleryModel = mongoose.model("gallery",GallerySchema)
module.exports = GalleryModel
