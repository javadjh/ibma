const express = require('express')
const {adminGuard} = require("../middlewares/Auth");
const {getMovingAdmin} = require("../handler/moving/query/MovingQuery");
const {getUsersMoving} = require("../handler/moving/query/MovingQuery");
const {insertMoving} = require("../handler/moving/command/MovingCommand");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/insert/moving',[justLogin],insertMoving)
router.get('/users/moving',[justLogin],getUsersMoving)
router.get('/moving',[justLogin,adminGuard],getMovingAdmin)

module.exports = router
