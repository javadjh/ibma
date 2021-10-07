const BusinessInformationModel = require("../../../model/BusinessInformationModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getAllBusinessInformation = async (req,res)=>{
    let allBusinessInformation = await BusinessInformationModel.find({
        buildingId:req.headers.usersbuilding
    }).populate("buildingId").sort({createDate:-1}).lean()

    allBusinessInformation.map(b=>{
        b.createDate = convertToShamsi(b.createDate)
        if(b.userId==req.user._id){
            b.canEdit = true
        }else{
            b.canEdit = false
        }
    })

    res.send(allBusinessInformation)
}
