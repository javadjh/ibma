const BuyAndSellModel = require("../../../model/BuyAndSellModel")

module.exports.getBuyAndSell = async (req,res)=>{
    let {pageId,eachPerPage,searchValue} = req.query
    pageId = parseInt(pageId)
    eachPerPage = parseInt(eachPerPage)
    let filter = {}
    if(searchValue)
        filter = {
            title:new RegExp(searchValue)
        }
    else
        filter = {}

    let byuAndSellList = await BuyAndSellModel.find(filter).skip((pageId-1)*eachPerPage)
                                              .limit(eachPerPage)

    let total = await BuyAndSellModel.find(filter)

    res.send({pageId,eachPerPage,total,byuAndSellList})
}

module.exports.getWaitingForConfirmBuyAndSell = async (req,res)=>{
    let buyAndSells = await BuyAndSellModel.find({
        isConfirm:false
    })
    res.send(buyAndSells)
}

module.exports.getSingleBuyAndSell = async (req,res)=>{
    let singleBuyAndSell = await BuyAndSellModel.find({
        _id:req.params.id
    })
    res.send(singleBuyAndSell)
}
