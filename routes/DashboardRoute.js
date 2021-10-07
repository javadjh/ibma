const express = require('express')
const {notesUsers} = require("../handler/dashboard/query/DashboardAdmin");
const {updateAppSetting} = require("../handler/dashboard/command/DashboardCommand");
const {adminDashboard} = require("../handler/dashboard/query/DashboardAdmin");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.get("/admin",[justLogin,adminGuard] ,adminDashboard)
router.post("/admin",[justLogin,adminGuard] ,updateAppSetting)
//user
router.get("/notes/users",[justLogin] ,notesUsers)

module.exports = router
