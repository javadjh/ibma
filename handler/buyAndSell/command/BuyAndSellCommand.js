const BuyAndSellModel = require("../../../model/BuyAndSellModel")
const {insertBuyAndSellValidator} = require("../../../validators/buyAndSellValidator");

module.exports.confirmBuyAndSell = async (req,res)=>{
    let id = req.params.id
    let buyAndSellConfirmed = await BuyAndSellModel.findOne({
        _id:id
    })
    buyAndSellConfirmed.isConfirm = true
    await buyAndSellConfirmed.save()
    res.send(true)
}

//user
module.exports.insertBuyAndSell = async (req,res)=>{
    const {error} = insertBuyAndSellValidator(req.body)
    if(error) return res.status(400).send({error:error.message})
    let {title,description,price,image,category,phoneNumber,isShowUserInformation} = req.body
    let newBuyAndSell = await new BuyAndSellModel({
        title,description,price,image,category,phoneNumber,isShowUserInformation,
        userId:req.user._id
    })
    if(!newBuyAndSell) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    await newBuyAndSell.save()
    res.send(true)
}
