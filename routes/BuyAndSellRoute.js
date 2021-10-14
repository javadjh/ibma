const express = require('express');
const {getSingleBuyAndSell} = require("../handler/buyAndSell/query/BuyAndSellQuery");
const {getBuyAndSell} = require("../handler/buyAndSell/query/BuyAndSellQuery");
const {insertBuyAndSell} = require("../handler/buyAndSell/command/BuyAndSellCommand");
const {adminGuard} = require("../middlewares/Auth");
const {getWaitingForConfirmBuyAndSell} = require("../handler/buyAndSell/query/BuyAndSellQuery");
const {confirmBuyAndSell} = require("../handler/buyAndSell/command/BuyAndSellCommand");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()


router.put("/waiting/confirm/buyandsell/:id",[justLogin,adminGuard],confirmBuyAndSell)
router.get("/waiting/confirm/buyandsells",[justLogin,adminGuard],getWaitingForConfirmBuyAndSell)

//user
router.post("/insert/buyandsell",[justLogin],insertBuyAndSell)
router.get("/buyandsells",[justLogin],getBuyAndSell)
router.get("/buyandsell/:id",[justLogin],getSingleBuyAndSell)

module.exports = router
