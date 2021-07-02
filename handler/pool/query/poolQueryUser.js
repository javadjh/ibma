const PoolModel = require("../../../model/PoolModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getPoolsTurnUser = async (req,res)=>{
    const {pageId,eachPerPage} = req.query
    let pId = parseInt(pageId===undefined?1:pageId)
    let ePP = parseInt(eachPerPage===undefined?12:eachPerPage)
    const turns = await PoolModel.find(
        {
            userId:req.user._id
        }
    ).populate("userId","_id name lastName userName").limit(ePP)
        .skip((pId-1)*ePP).select("-__v").lean()
    const total = await PoolModel.find({
        userId:req.user._id
    }).count()
    turns.map(t=> {
        t.turnDate = convertToShamsi(t.turnDate)
        t.createDate = convertToShamsi(t.createDate)
    })

    res.send({
        pageId:pId,
        eachPerPage:ePP,
        total,
        turns
    })
}
