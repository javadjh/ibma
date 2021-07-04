const _ = require("lodash")
const AdsBoardModel = require("../../../model/AdsBoradModel");
const {insertAdsBoardValidator} = require("../../../validators/adsboardValidator");
const {isValidObjectId} = require('mongoose')
module.exports.insertAdsBoard = async (req,res)=>{
    const {error} = insertAdsBoardValidator(req.body)
    if(error) return res.status(400).send({"error":error.message})
    let newAdsBoard = await new AdsBoardModel(_.pick(req.body,[
        "title",
        "image",
        "url"
    ]))
    newAdsBoard = await newAdsBoard.save()
    res.send(newAdsBoard)
}

module.exports.deleteAdsBoard = async (req,res)=>{
    try {
        const {id} = req.params
        console.log(id)
        if (!isValidObjectId(id)) return res.status(400).send({"error":"ای دی اشتباه میباشد"})
        const adsDeleted = await AdsBoardModel.findOneAndRemove(id)
        res.send(adsDeleted)
    }catch (err){
        console.log(err)
    }
}
