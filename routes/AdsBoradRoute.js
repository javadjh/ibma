const express = require('express')
const {insertAdsBoard} = require("../handler/adsBoard/command/adsBoardCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const {getAdsBoard} = require("../handler/adsBoard/query/adsBoradQuery");
const router = express.Router()

router.get('/adsboards',[justLogin],getAdsBoard)

router.post('/insert/adsboards',[justLogin,adminGuard],insertAdsBoard)

module.exports = router
