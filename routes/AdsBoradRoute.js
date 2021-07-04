const express = require('express')
const {deleteAdsBoard} = require("../handler/adsBoard/command/adsBoardCommand");
const {insertAdsBoard} = require("../handler/adsBoard/command/adsBoardCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const {getAdsBoard} = require("../handler/adsBoard/query/adsBoradQuery");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null,  Date.now()+"-"+file.originalname)
    }
})

const upload = multer({ storage: storage })

const router = express.Router()

router.get('/adsboards',[justLogin],getAdsBoard)

router.post('/insert/adsboards',[justLogin,adminGuard,upload.single("imageUrl")],insertAdsBoard)
router.delete('/adsboard/:id',[justLogin,adminGuard],deleteAdsBoard)

module.exports = router
