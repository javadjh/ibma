const FileModel = require("../../../model/FileModel");
module.exports.insertFile = async (req,res)=>{
    let newFile = await new FileModel({
        fileName:req.file.filename
    })
    if(!newFile) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    await newFile.save()
    res.send(newFile)
}
