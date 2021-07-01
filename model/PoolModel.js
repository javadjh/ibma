const mongoose = require('mongoose')

const PoolSchema = new mongoose.Schema({
    createDate:{
        type:Date,
        default:Date.now,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    turnNumber:{
        type:Number,
        required:true
    },
    turnDate:{
        type:Date,
        required:true
    }
})
const PoolModel = mongoose.model("pool",PoolSchema)

module.exports = PoolModel
module.exports.PoolSchema = PoolSchema
