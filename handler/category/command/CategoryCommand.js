const CategoryModel = require("../../../model/CategoryModel");
const {insertCategoryValidator} = require("../../../validators/categoryValidator");
module.exports.insertCategory = async (req,res)=>{
    let {error} = insertCategoryValidator(req.body)
    if(error) return res.status(400).send({error:error.message})
    let newCategory = await new CategoryModel(req.body)
    if(!newCategory) res.status(400).send({error:"خطا در ثبت اطلاعات"})
    await newCategory.save()
    res.send(true)
}
