const MovingModel = require("../../../model/MovingModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getMovingAdmin = async (req,res)=>{
    let {pageId,eachPerPage} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)

    let moving = await MovingModel.find({
        buildingId:req.headers.usersbuilding
    }).skip((pageId-1)*eachPerPage).limit(eachPerPage).lean().sort({createDate:-1}).populate("buildingId").populate("userId","-password")
    let total = await MovingModel.find({
        buildingId:req.headers.usersbuilding
    }).count()

    moving.map(r=>{
        r.startDate = convertToShamsi(r.startDate)
        r.createDate = convertToShamsi(r.createDate)
    })

    res.send({
        pageId,
        eachPerPage,
        total,
        moving
    })
}

//user
module.exports.getUsersMoving = async (req,res)=>{
    let userMoving = await MovingModel.find({
        buildingId:req.headers.usersbuilding,
        userId:req.user._id
    }).lean().sort({createDate:-1}).populate("buildingId")

    userMoving.map(r=>{
        r.startDate = convertToShamsi(r.startDate)
        r.createDate = convertToShamsi(r.createDate)
    })
    res.send(userMoving)
}
module.exports
