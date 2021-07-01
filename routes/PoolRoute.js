const express = require('express')
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/insert/pool',[justLogin] , )

module.exports = router
