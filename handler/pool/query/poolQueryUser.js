const PoolModel = require("../../../model/PoolModel");
const AppSettingModel = require("../../../model/AppSettingModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getPoolsTurnUser = async (req,res)=>{
    const turns = await PoolModel.find(
        {
            userId:req.user._id
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
            turnDate: req.body.date
        }).count()


        //check user has turn
        const isUserHasTurn = await PoolModel.findOne({
            turnDate: req.body.date,
            userId:req.user._id
        })

        if(isUserHasTurn){
            res.send({
                "turnsCount":totalPoolTurn,
                "canTakeTurn":false,
                "message":"شمار در این روز نوبت دارد"
            })
        }


        //get limit count
        const limitCount = await AppSettingModel.findById("60ddd502df0fe041487135fb").select("poolTurnsLimit")
        const limit = parseInt(limitCount.poolTurnsLimit + "")


        //check limit count and turns have
        if(totalPoolTurn>=limit){
            res.send({
                "turnsCount":totalPoolTurn,
                "canTakeTurn":false,
                "message":"متاسفانه روز انتخاب شده ظرفیت ندارد"
            })
        }else{
            res.send({
                "turnsCount":totalPoolTurn,
                "canTakeTurn":true,
                "message":"شمار میتوانید این روز را رزرو کنید"
            })
        }
    }catch (err){
        console.log(err)
    }

}

