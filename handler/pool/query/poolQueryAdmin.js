const PoolModel = require("../../../model/PoolModel");
const {convertToShamsi} = require("../../../utility/dateUtility");
module.exports.getPoolsTurnAdmin = async (req,res)=>{
    const {turnNumber,turnDate,pageId,eachPerPage} = req.query
    console.log(turnNumber)
    pId = parseInt(pageId===undefined?1:pageId)
    ePP = parseInt(eachPerPage===undefined?12:eachPerPage)
    let filter
    if(turnNumber===0 ||turnNumber===undefined ||turnNumber==="" ){
        filter={
            turnDate:turnDate,
            buildingId:req.headers.usersbuilding
        }
    }else{
        filter={
            turnNumber:turnNumber,
            turnDate:turnDate,
            buildingId:req.headers.usersbuilding
        }
    }
    const turns = await PoolModel.find(filter).populate("userId","_id name lastName userName").limit(ePP)
        .skip((pId-1)*ePP).select("-__v").lean()
    const total = await PoolModel.find(filter).count()
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
