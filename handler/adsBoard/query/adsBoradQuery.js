const AdsBoardModel = require("../../../model/AdsBoradModel");
module.exports.getAdsBoard = async (req,res)=>{
    const adsBoard = await AdsBoardModel.find({
        buildingId:req.headers.usersbuilding
    }).lean()
    adsBoard.map(ad=>{
        ad.image = "http://192.168.1.38:1000/" + ad.image
    })
    res.send(adsBoard)
}
