const BillModel = require("../../../model/BillModel");
const {upsertBillValidator} = require("../../../validators/BillValidator");
module.exports.upsertBill = async (req,res)=>{
    let {startDate,endDate,type,price,file,description,homeNumber,id} = req.body
    const {error} = upsertBillValidator({
        startDate,endDate,type,price,file,description,homeNumber,
    })
    if(error) return res.status(400).send({error:error.message})

    if(id===undefined){
        let newBill = await new BillModel({
            startDate,endDate,type,price,file,description,homeNumber,
            buildingId:req.headers.usersbuilding
        })
        if(!newBill) return res.status(400).send({error:"خطا در ثبت اطلاعات"})
        await newBill.save()
    }else{
        let updateBill = await BillModel.findOneAndUpdate({
            _id:id
        },{
            $set:{
                startDate,endDate,type,price,file,description,homeNumber,
                buildingId:req.headers.usersbuilding
            }
        })
        if(!updateBill) return res.status(400).send({error:"خطا در ثبت اطلاعات"})
    }
    res.send(true)
}
