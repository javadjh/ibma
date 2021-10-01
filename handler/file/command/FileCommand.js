const FileModel = require("../../../model/FileModel");
const imageThumbnail = require('image-thumbnail');
const fs = require('fs')

module.exports.insertFile = async (req,res)=>{
    let newFile = await new FileModel({
        fileName:req.file.filename
    })
    if(!newFile) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    await newFile.save()

    /*if(req.file.filename.includes(".png") || req.file.filename.includes(".jpg") || req.file.filename.includes(".jpge")){
        try {
            const thumbnail = await imageThumbnail({ uri: `http://localhost:1000/${req.file.filename}` });
            await fs.writeFileSync(`../../../uploads/_th_${req.file.filename}`,thumbnail)
            console.log(`http://localhost:1000/_th_${req.file.filename}`);
        }catch (err) {
            console.error(err);
        }
    }*/

    res.send(newFile)
}
