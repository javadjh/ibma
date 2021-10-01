const ResidentialUnitModel = require("../../../model/ResidentialUnitModel");
const {isValidObjectId} = require('mongoose')
module.exports.getSingleResidentialUnit = async (req,res)=>{
    if(!isValidObjectId(req.params.id)) return res.status(400).send({error:"ای دی اشتباه است"})
    let singleResidentialUnit = await ResidentialUnitModel.findOne({
        _id:req.params.id
    })
    res.send(singleResidentialUnit)
}
module.exports.getAllResidentialUnit = async (req,res)=>{
    let {pageId,eachPerPage,searchValue} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)
    let filter = {}
    if(searchValue) {
        filter = {
            buildingId: req.headers.usersbuilding,
            homeNumber: parseInt(searchValue)
        }
    }else{
        filter = {
            buildingId: req.headers.usersbuilding,
        }
    }
    const residentialUnits = await ResidentialUnitModel.find(filter).skip((pageId-1)*eachPerPage).limit(eachPerPage)
    const total = await ResidentialUnitModel.find({
        buildingId:req.headers.usersbuilding,
    }).count()

    res.send({
        pageId,
        eachPerPage,
        total,
        residentialUnits
    })

}
