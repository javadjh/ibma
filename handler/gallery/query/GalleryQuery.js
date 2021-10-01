const GalleryModel = require("../../../model/GalleyModel");
module.exports.getBuildingGallery = async (req,res)=>{
    let allBuildingGallery = await GalleryModel.find({
        buildingId:req.params.id
    })
    res.send(allBuildingGallery)

}

module.exports.getUsersBuildingGallery = async (req,res)=>{
    let usersBuildingGallery = await GalleryModel.find({buildingId:req.headers.usersbuilding})
    console.log(usersBuildingGallery)
    res.send(usersBuildingGallery)
}
