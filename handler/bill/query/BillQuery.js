const BillModel = require("../../../model/BillModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getBills = async (req,res)=>{
    let {pageId,eachPerPage} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)

    let bills = await BillModel.find({
        buildingId:req.headers.usersbuilding
    }).skip((pageId-1)*eachPerPage).limit(eachPerPage).sort({createDate:-1}).lean()

    let total = await BillModel.find({
        buildingId:req.headers.usersbuilding
    }).count()

    bills.map(b=>{
        b.startDate = convertToShamsi(b.startDate)
        b.endDate = convertToShamsi(b.endDate)
    })
    res.send({
        pageId,
        eachPerPage,
        total,
        bills,
    })
}

module.exports.getUsersBill = async (req,res)=>{
    let bills = await BillModel.find({
        homeNumber:req.user.homeNumber,
        buildingId:req.headers.usersbuilding
    })

    res.send(bills)
}
