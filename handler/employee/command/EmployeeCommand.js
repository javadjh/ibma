const EmployeeModel = require("../../../model/EmployeeModel");
const {insertEmployeeValidator} = require("../../../validators/employeeValiddator");

module.exports.insertEmployee= async (req,res)=>{
    const {name,lastName,role,phoneNumber} = req.body

    const {error} = insertEmployeeValidator({name, lastName, role, phoneNumber, buildingId: req.headers.usersbuilding})
    if(error) return res.send({"error":error.message})

    let newEmployee = await new EmployeeModel({
        name,lastName,role,phoneNumber,buildingId:req.headers.usersbuilding
    })
    if(!newEmployee) return res.status(400).send({"error":"خطا در ثبت اطلاعات"})
    newEmployee = await newEmployee.save()
    res.send(newEmployee)
}

module.exports.deleteEmployee = async (req,res)=>{
    let deleteEmployee = await EmployeeModel.findOneAndRemove({
        _id:req.params.id,
        buildingId:req.headers.usersbuilding
    })
    if(!deleteEmployee) return res.status(400).send({"error":"خطا در حذف کارمند"})

    res.send(deleteEmployee)
}
