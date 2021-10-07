const BusinessInformationModel = require("../../../model/BusinessInformationModel");
const {upsertBusinessInformationValidator} = require("../../../validators/BusinessInformationValidator");
module.exports.upsertBusinessInformation = async (req,res)=>{
    let {image,title,address,tel} = req.body
    const {error} = upsertBusinessInformationValidator(req.body)
    if(error) return res.status(400).send({error:error.message})
    if(req.body.id){
        let singleBusinessInformation = await BusinessInformationModel.findOneAndUpdate({
            _id:req.body.id
        },{
            $set:{
                buildingId:req.headers.usersbuilding,
                image,title,address,tel,
                userId:req.user._id
            }
        })
        if(!singleBusinessInformation) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    }else{
        let newBusinessInformation = await new BusinessInformationModel({
            buildingId:req.headers.usersbuilding,
            image,title,address,tel,
            userId:req.user._id
        })
        if(!newBusinessInformation) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
        await newBusinessInformation.save()
    }
    res.send(true)
}
