const express = require('express')
const {updateAppSetting} = require("../handler/dashboard/command/DashboardCommand");
const {adminDashboard} = require("../handler/dashboard/query/DashboardAdmin");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.get("/admin",[justLogin,adminGuard] ,adminDashboard)
router.post("/admin",[justLogin,adminGuard] ,updateAppSetting)

module.exports = router
