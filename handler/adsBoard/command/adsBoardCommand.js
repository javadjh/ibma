const _ = require("lodash")
const AdsBoardModel = require("../../../model/AdsBoradModel");
const {insertAdsBoardValidator} = require("../../../validators/adsboardValidator");
const {isValidObjectId} = require('mongoose')

module.exports.insertAdsBoard = async (req,res)=>{
    try {
        const {error} = insertAdsBoardValidator({
            title:req.body.title,
            url:req.body.url,
            image:req.file.filename
        })
        if(error) return res.status(400).send({"error":error.message})
        let newAdsBoard = await new AdsBoardModel({
            title:req.body.title,
            url:req.body.url,
            image:req.file.filename,
            buildingId:req.headers.usersbuilding
        })
        newAdsBoard = await newAdsBoard.save()
        res.send(newAdsBoard)
    }catch (err){
        console.log(err)
    }
}

module.exports.deleteAdsBoard = async (req,res)=>{
    try {
        const {id} = req.params
        console.log(id)
        if (!isValidObjectId(id)) return res.status(400).send({"error":"ای دی اشتباه میباشد"})
        const adsDeleted = await AdsBoardModel.findOneAndRemove({
            id,
            buildingId:req.headers.usersbuilding
        })
        if(adsDeleted)
            res.send(adsDeleted)
        else
            return res.send({"error":"مشکل در حذف"})
    }catch (err){
        console.log(err)
    }
}
