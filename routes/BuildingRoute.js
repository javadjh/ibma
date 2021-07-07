const express = require('express')
const {insertBuilding} = require("../handler/building/command/BuildingCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post("/insert/building",[justLogin,adminGuard],insertBuilding)

module.exports = router
