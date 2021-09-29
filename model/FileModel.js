const mongoose = require('mongoose')
const FileSchema = new mongoose.Schema({
    fileName:{
        type:String,
        require:true
    },
})
const FileModel = mongoose.model("file",FileSchema)
module.exports = FileModel
