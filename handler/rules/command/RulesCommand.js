const RuleModel = require("../../../model/RuleModel");
const {upsertRuleValidator} = require("../../../validators/RuleValidator");
module.exports.upsertRule = async (req,res)=>{
    let rule
    const {error} = upsertRuleValidator(req.body)
    if (error) return res.status(400).send({error: error.message})
    if(req.body.id===undefined) {
        rule = await new RuleModel(req.body)
        if(!rule) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
        await rule.save()
    }else{
        rule = await RuleModel.findOneAndUpdate({
            _id:req.body.id
        },{
            $set:req.body
        },{new:true})
    }
    if(!rule) return res.status(400).send({error:"خطا در ثبت اطلاعات رخ داد"})
    res.send(true)
}
module.exports.deleteRule = async (req,res)=>{
    let rule = await RuleModel.findOneAndRemove({_id:req.params.id})
    if(!rule) return res.status(400).send({error:"خطا در حذف اطلاعات رخ داد"})
    res.send(true)
}
