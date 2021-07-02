const _ = require("lodash")
const AdsBoardModel = require("../../../model/AdsBoradModel");
const {insertAdsBoardValidator} = require("../../../validators/adsboardValidator");
module.exports.insertAdsBoard = async (req,res)=>{
    try {
        const {error} = insertAdsBoardValidator(req.body)
        if(error) return res.status(400).send({"error":error.message})
        let newAdsBoard = await new AdsBoardModel(_.pick(req.body,[
            "title",
            "image",
            "url"
        ]))
        newAdsBoard = await newAdsBoard.save()
        res.send(newAdsBoard)
    }catch (err){
        console.log(err)
    }

}
