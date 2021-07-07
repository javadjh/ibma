const PoolModel = require("../../../model/PoolModel");
const AppSettingModel = require("../../../model/AppSettingModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getPoolsTurnUser = async (req,res)=>{
    const turns = await PoolModel.find(
        {
            userId:req.user._id,
            buildingId:req.headers.usersbuilding
        }
    ).populate("userId","_id name lastName userName").limit(3)
        .sort({
            createDate : -1
        }).lean()
    turns.map(t=> {
        t.turnDate = convertToShamsi(t.turnDate)
        t.createDate = convertToShamsi(t.createDate)
    })

    res.send(turns)
}

module.exports.checkPoolTurn = async (req,res)=>{
    try {
        //get total pool turns inserted on date
        const totalPoolTurn = await PoolModel.find({
            turnDate: req.query.date,
            buildingId:req.headers.usersbuilding
        }).count()


        //check user has turn
        const isUserHasTurn = await PoolModel.findOne({
            turnDate: req.query.date,
            userId:req.user._id,
            buildingId:req.headers.usersbuilding
        })

        if(isUserHasTurn){
             return res.send({
                "turnsCount":totalPoolTurn,
                "canTakeTurn":false,
                "message":"شما در این روز نوبت دارید"
            })
        }


        //get limit count
        const limitCount = await AppSettingModel.findById("60ddd502df0fe041487135fb").select("poolTurnsLimit")
        const limit = parseInt(limitCount.poolTurnsLimit + "")


        //check limit count and turns have
        if(totalPoolTurn>=limit){
            return res.send({
                "turnsCount":totalPoolTurn,
                "canTakeTurn":false,
                "message":"متاسفانه روز انتخاب شده ظرفیت ندارد"
            })
        }else{
            return res.send({
                "turnsCount":totalPoolTurn,
                "canTakeTurn":true,
                "message":"شما میتوانید این روز را رزرو کنید"
            })
        }
    }catch (err){
        console.log(err)
    }

}

