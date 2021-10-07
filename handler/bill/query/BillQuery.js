const BillModel = require("../../../model/BillModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getBills = async (req,res)=>{
    let {pageId,eachPerPage,searchValue} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)

    let filter = {}
    if(searchValue===undefined || searchValue===""){
        filter = {
            buildingId:req.headers.usersbuilding
        }
    }else{
        filter = {
            buildingId:req.headers.usersbuilding,
            homeNumber:parseInt(searchValue)
        }
    }

    let bills = await BillModel.find(filter).skip((pageId-1)*eachPerPage).limit(eachPerPage).sort({createDate:-1}).lean()

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
    }).sort({createDate:-1}).lean()
    bills.map(b=>{
        b.startDate = convertToShamsi(b.startDate)
        b.endDate = convertToShamsi(b.endDate)
        b.createDate = convertToShamsi(b.createDate)
    })
    res.send(bills)
}
