const AppSettingModel = require("../../../model/AppSettingModel");
module.exports.updateAppSetting = async (req,res)=>{

    try {
        const {poolTurnsLimit , payPrice} = req.body
        console.log(poolTurnsLimit)
        console.log(payPrice)
        let appSettingUpdated = await AppSettingModel.findOneAndUpdate("60ddd502df0fe041487135fb",{
            $set:{
                poolTurnsLimit:Number(poolTurnsLimit),
                payPrice:Number(payPrice)
            }
        })

        appSettingUpdated = await appSettingUpdated.save()
        res.send(appSettingUpdated)
    }catch (err){
        console.log(err)
    }
}
