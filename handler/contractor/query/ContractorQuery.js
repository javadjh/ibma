const ContractorModel = require("../../../model/ContractorModel");
module.exports.getAllContractors = async (req,res)=>{
    let contractors = await ContractorModel.find()
    res.send(contractors)
}
