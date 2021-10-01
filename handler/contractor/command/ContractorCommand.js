const ContractorModel = require("../../../model/ContractorModel");
const {insertContractorValidator} = require("../../../validators/ContractorValidator");
const {isValidObjectId} = require('mongoose')
module.exports.insertContractor = async (req,res)=>{
    const {error} = insertContractorValidator(req.body)
    const {fullName,job,phoneNumber,description,profile} = req.body
    if(error) return res.status(400).send({error:error.message})
    let newContractor = await new ContractorModel({
        buildingId:req.headers.usersbuilding,
        fullName,job,phoneNumber,description,profile
    })
    if(!newContractor) return res.status(400).send({error:"خطا در ثبت پیمانکار"})
    await newContractor.save()
    res.send(true)
}
module.exports.deleteContractor = async (req,res)=>{
    if(!isValidObjectId(req.params.id)) return res.status(400).send({error:"ای دی اشتباه است"})
    let deleteContractor = await ContractorModel.findByIdAndRemove(req.params.id)
    if(!deleteContractor) return res.status(400).send({error:"حطا در حذف"})
    res.send(true)
}
