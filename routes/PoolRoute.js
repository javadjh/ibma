const express = require('express')
const {getPoolsTurnUser} = require("../handler/pool/query/poolQueryUser");
const {adminGuard} = require("../middlewares/Auth");
const {getPoolsTurnAdmin} = require("../handler/pool/query/poolQueryAdmin");
const {insertPool} = require("../handler/pool/command/poolCommand");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/insert/pool',[justLogin] ,insertPool )

router.get('/pools',[justLogin,adminGuard] ,getPoolsTurnAdmin )
router.get('/pools/user',[justLogin] ,getPoolsTurnUser )

module.exports = router
