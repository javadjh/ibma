const express = require('express')
const {deleteEmployee} = require("../handler/employee/command/EmployeeCommand");
const {adminGuard} = require("../middlewares/Auth");
const {insertEmployee} = require("../handler/employee/command/EmployeeCommand");
const {getEmployees} = require("../handler/employee/query/EmployeeQuery");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.get("/employees",[justLogin],getEmployees)
router.post("/insert/employee",[justLogin,adminGuard],insertEmployee)
router.delete("/employee/:id",[justLogin,adminGuard],deleteEmployee)

module.exports = router
