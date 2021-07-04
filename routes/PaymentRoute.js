const express = require('express')
const {getPageDatet} = require("../handler/payment/query/paymentQueryUser");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.get("/payment",[justLogin] , getPageDatet)

module.exports = router
