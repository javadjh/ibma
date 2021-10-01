const express = require('express')
const {getUsersBuildingGallery} = require("../handler/gallery/query/GalleryQuery");
const {deleteImage} = require("../handler/gallery/command/galleryCommand");
const {insertImageToGallery} = require("../handler/gallery/command/galleryCommand");
const {justLogin} = require("../middlewares/Auth");
const {adminGuard} = require("../middlewares/Auth");
const {getBuildingGallery} = require("../handler/gallery/query/GalleryQuery");
const router = express.Router()

//admin
router.get('/gallery/:id',[justLogin,adminGuard],getBuildingGallery)
router.post('/insert/gallery',[justLogin,adminGuard],insertImageToGallery)
router.delete('/gallery/:id',[justLogin,adminGuard],deleteImage)

//user
router.get('/building/gallery/user',[justLogin],getUsersBuildingGallery)

module.exports = router
