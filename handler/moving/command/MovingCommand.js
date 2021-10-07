const MovingModel = require("../../../model/MovingModel");
const {insertMovingValidator} = require("../../../validators/MovingValidator");
module.exports.insertMoving = async (req,res)=>{
    let {homeNumber,startDate,deadline,description,timeStart} = req.body
    const {error} = insertMovingValidator(req.body)
    if(error) return res.status(400).send({error:error.message})

    let newMoving = await new MovingModel({
        homeNumber,startDate,deadline,description,timeStart,
        buildingId:req.headers.usersbuilding,
        userId:req.user._id
    })
    if(!newMoving) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    await newMoving.save()
    res.send(true)
}
