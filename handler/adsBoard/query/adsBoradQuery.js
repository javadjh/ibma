const AdsBoardModel = require("../../../model/AdsBoradModel");
module.exports.getAdsBoard = async (req,res)=>{
    const adsBoard = await AdsBoardModel.find().lean()
    adsBoard.map(ad=>{
        ad.image = "http://192.168.1.2:1000/" + ad.image
    })
    res.send(adsBoard)
}
