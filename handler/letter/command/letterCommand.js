const LetterModel = require("../../../model/LetterModel");
const _ = require('lodash')
const mongoose = require('mongoose')
const {insertLetterValidator} = require("../../../validators/letterValidator");


module.exports.insertLetter = async (req,res)=>{
    const {target,userId} = req.body
    if (target==="user"){
        if(userId===undefined || !mongoose.isValidObjectId(userId)){
            return res.status(400).send({"error":"ای دی یوزر اجباری میباشد"})
        }
    }
    const {error} = insertLetterValidator(req.body)
    if(error) return res.status(400).send({"error":error.message})
    let newLetter = await new LetterModel(_.pick(req.body,[
        "title",
        "target",
        "message",
        "createDate",
        "userId",
    ]))
    newLetter = await newLetter.save()
    res.send(newLetter)
}
