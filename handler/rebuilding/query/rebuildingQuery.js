const RebuildingModel = require("../../../model/RebeildingModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getRebuildingAdmin = async (req,res)=>{
    let {pageId,eachPerPage} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)

    let rebuilding = await RebuildingModel.find({
        buildingId:req.headers.usersbuilding
    }).skip((pageId-1)*eachPerPage).limit(eachPerPage).lean().sort({createDate:-1}).populate("buildingId").populate("userId","-password")
    let total = await RebuildingModel.find({
        buildingId:req.headers.usersbuilding
    }).count()

    rebuilding.map(r=>{
        r.startDate = convertToShamsi(r.startDate)
        r.createDate = convertToShamsi(r.createDate)
    })

    res.send({
        pageId,
        eachPerPage,
        total,
        rebuilding
    })
}
//user
module.exports.getRebuildingUser = async (req,res)=>{
    let rebuilding = await RebuildingModel.find({
        buildingId:req.headers.usersbuilding,
        userId:req.user._id
    }).lean().sort({createDate:-1}).populate("buildingId")

    rebuilding.map(r=>{
        r.startDate = convertToShamsi(r.startDate)
        r.createDate = convertToShamsi(r.createDate)
    })

    res.send(rebuilding)
}
