const BoardDirectorModel = require("../../../model/BoardDirectorModel");
const {insertBoardDirectorValidator} = require("../../../validators/boardDirectorValidator");
const {isValidObjectId} = require('mongoose')

module.exports.insertBoardDirector = async (req,res)=>{
    const {name,lastName,homeNumber,title} = req.body
    //data validator
    const {error} = insertBoardDirectorValidator({
        name,lastName,homeNumber,title,buildingId:req.headers.usersbuilding
    })
    if(error) return res.status(400).send({"error":error.message})

    //insert
    let newBoardDirector = await new BoardDirectorModel({
        name,lastName,homeNumber,title,buildingId:req.headers.usersbuilding
    })

    if(!newBoardDirector) return res.status(400).send({"error":"خطا در افزودن هیئت مدیره رخ داد"})

    newBoardDirector = await newBoardDirector.save()
    res.send(newBoardDirector)


}

module.exports.deleteBoardDirector = async (req,res)=>{
    if(!isValidObjectId(req.params.id) || req.params.id==="") return res.status(400).send({"error":"ای دی ارسال شده صحیح نمیباشد"})

    const deleteBoardDirector = await BoardDirectorModel.findOneAndRemove({
        _id:req.params.id,
        buildingId:req.headers.usersbuilding
    })

    if(!deleteBoardDirector) return res.status(400).send({"error":"خطا در حذف عضو هیئت مدیره"})

    res.send(deleteBoardDirector)
}
