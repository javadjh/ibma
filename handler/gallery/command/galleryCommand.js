const GalleryModel = require("../../../model/GalleyModel");
module.exports.insertImageToGallery = async (req,res)=>{
    let {buildingId,file} = req.body
    let newImage = await new GalleryModel({
        buildingId,
        file
    })
    await newImage.save()
    res.send(true)
}
module.exports.deleteImage = async (req,res)=>{
    let imageDeleted = await GalleryModel.findOneAndRemove({
        _id:req.params.id
    })
    if(!imageDeleted) return res.status(400).send({error:"خطا در حذف تصویر"})
    res.send(true)
}
