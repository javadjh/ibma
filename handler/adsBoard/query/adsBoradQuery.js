const AdsBoardModel = require("../../../model/AdsBoradModel");
module.exports.getAdsBoard = async (req,res)=>{
    const adsBoard = await AdsBoardModel.find()
    res.send(adsBoard)
}
