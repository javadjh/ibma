const express = require('express')
const {justLogin} = require("../middlewares/Auth");
const {adminGuard} = require("../middlewares/Auth");
const {insertFile} = require("../handler/file/command/FileCommand");
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


router.post('/insert/file',[justLogin,adminGuard,upload.single("file")],insertFile)

module.exports = router
