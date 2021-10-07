const RebuildingModel = require("../../../model/RebeildingModel");
const {insertRebuildingValidator} = require("../../../validators/RebuildingValidator");
module.exports.insertRebuilding = async (req,res)=>{
    let {homeNumber,startDate,deadline,description} = req.body
    const {error} = insertRebuildingValidator(req.body)
    if(error) return res.status(400).send({error:error.message})

    let newRebuilding = await new RebuildingModel({
        homeNumber,startDate,deadline,description,
        buildingId:req.headers.usersbuilding,
        userId:req.user._id
    })
    await newRebuilding.save()

    res.send(true)
}
