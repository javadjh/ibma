const BuildingModel = require("../../../model/BuildingModel");
const UserModel = require("../../../model/UserModel");
const {insertBuildingValidator} = require("../../../validators/buildingValidator");
module.exports.insertBuilding = async (req,res)=>{
    const {error} = insertBuildingValidator(req.body)
    if(error) return res.status(400).send({"error":error})

    const {title} = req.body

    let newBuilding = await new BuildingModel({title,adminId:req.user._id})

    let addBuildingToAdmin = await UserModel.findOne({
        _id:req.user._id
    }).select("-password")
    addBuildingToAdmin.buildings.push(newBuilding._id)

    addBuildingToAdmin = await addBuildingToAdmin.save()
    newBuilding = await newBuilding.save()

    res.send(addBuildingToAdmin)
}
