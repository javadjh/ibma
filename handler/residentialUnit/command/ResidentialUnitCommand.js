const ResidentialUnitModel = require("../../../model/ResidentialUnitModel");
const {upsertResidentialUnitValidator} = require("../../../validators/ResidentialUnitValidator");
module.exports.upsertResidentialUnit = async (req,res)=>{
    let {homeNumber,postNumber,area,floor,id} = req.body
    const {error} = upsertResidentialUnitValidator(req.body)
    if(error) return res.status(400).send({error:error.message})
    if(req.body.id===undefined){
        let newResidentialUnit = await new ResidentialUnitModel({
            buildingId:req.headers.usersbuilding,
            homeNumber,postNumber,area,floor
        })
        if(!newResidentialUnit) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})

        await newResidentialUnit.save()
    }else{
        let updateResidentialUnit = await ResidentialUnitModel.findOneAndUpdate({_id:id},{
            $set:{
                buildingId:req.headers.usersbuilding,
                homeNumber,postNumber,area,floor
            }
        })
        if(!updateResidentialUnit) return res.status(400).send({error:"خطا در ویرایش اطلاعات"})
    }

    res.send(true)
}
