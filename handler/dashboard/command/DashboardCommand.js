const AppSettingModel = require("../../../model/AppSettingModel");
const {AppSettingSchema} = require("../../../model/AppSettingModel");
module.exports.updateAppSetting = async (req,res)=>{
    const {poolTurnsLimit , payPrice,notes} = req.body
    console.log(poolTurnsLimit)
    console.log(payPrice)
    let appSettingUpdated = await AppSettingModel.findOneAndUpdate({buildingId:req.headers.usersbuilding},{
        $set:{
            poolTurnsLimit:Number(poolTurnsLimit),
            payPrice:Number(payPrice),
            notes,
            buildingId:req.headers.usersbuilding
        }
    })

    appSettingUpdated = await appSettingUpdated.save()
    res.send(appSettingUpdated)
}
