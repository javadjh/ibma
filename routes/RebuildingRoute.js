const express = require('express')
const {getRebuildingUser} = require("../handler/rebuilding/query/rebuildingQuery");
const {insertRebuilding} = require("../handler/rebuilding/command/rebuildingCommand");
const {getRebuildingAdmin} = require("../handler/rebuilding/query/rebuildingQuery");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.get('/rebuilding',[justLogin,adminGuard],getRebuildingAdmin)
//user
router.post('/insert/rebuilding',[justLogin],insertRebuilding)
router.get('/users/rebuilding',[justLogin],getRebuildingUser)

module.exports = router
