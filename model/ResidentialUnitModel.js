const mongoose = require('mongoose')
const ResidentialUnitSchema = new mongoose.Schema({
    homeNumber:{
        type:Number,
        required:true
    },
    postNumber:{
        type:String,
    },
    area:{
        type:Number,
        required:true
    },
    createDate:{
        default:Date.now,
        type:Date
    },
    floor:{
        type:Number,
        required:true
    },
    buildingId:{
        required:true,
        type:mongoose.Types.ObjectId,
        ref:"building"
    },
})
const ResidentialUnitModel = mongoose.model("residentialUnit",ResidentialUnitSchema)
module.exports = ResidentialUnitModel
