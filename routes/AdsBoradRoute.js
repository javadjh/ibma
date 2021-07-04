const express = require('express')
const {deleteAdsBoard} = require("../handler/adsBoard/command/adsBoardCommand");
const {insertAdsBoard} = require("../handler/adsBoard/command/adsBoardCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const {getAdsBoard} = require("../handler/adsBoard/query/adsBoradQuery");
const router = express.Router()

router.get('/adsboards',[justLogin],getAdsBoard)

router.post('/insert/adsboards',[justLogin,adminGuard],insertAdsBoard)
router.delete('/adsboard/:id',[justLogin,adminGuard],deleteAdsBoard)

module.exports = router
