const PoolModel = require("../../../model/PoolModel");
const AppSettingModel = require("../../../model/AppSettingModel");
module.exports.insertPool = async (req,res)=>{
    //get total pool turns inserted on date
    const totalPoolTurn = await PoolModel.find({
        turnDate: req.body.date,
        buildingId:req.headers.usersbuilding
    }).count()


    //check user has turn
    const isUserHasTurn = await PoolModel.findOne({
        turnDate: req.body.date,
        userId:req.user._id,
        buildingId:req.headers.usersbuilding
    })

    if(isUserHasTurn){
        return res.status(400).send({"error":"شما قبلا ثبت نام کرده اید"})
    }


    //get limit count
    const limitCount = await AppSettingModel.findById("60ddd502df0fe041487135fb").select("poolTurnsLimit")
    const limit = parseInt(limitCount.poolTurnsLimit + "")


    //check limit count and turns have
    let addPoolTurn;
    if(totalPoolTurn>=limit){
        res.status(400).send({"error":"به حداکثر تعداد تاریخ تعیین شده رسیده ایم"})
    }else{
        addPoolTurn = await new PoolModel({
            userId:req.user._id,
            turnNumber:totalPoolTurn+2,
            turnDate: req.body.date,
            buildingId:req.headers.usersbuilding
        })
        addPoolTurn.save()
    }
    res.send(addPoolTurn)

}
