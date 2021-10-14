const express = require('express')
const {getMainsCategory} = require("../handler/category/query/CategoryQuery");
const {getMainCategory} = require("../handler/category/query/CategoryQuery");
const {insertCategory} = require("../handler/category/command/CategoryCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/insert/category',[justLogin,adminGuard],insertCategory)
router.get('/maincategory',[justLogin],getMainCategory)
router.get('/mainscategory/:id',[justLogin],getMainsCategory)

module.exports = router
