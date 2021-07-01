const express = require('express')
const {insertPool} = require("../handler/pool/command/poolCommand");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/insert/pool',[justLogin] ,insertPool )

module.exports = router
