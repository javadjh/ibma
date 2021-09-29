const express = require('express')
const {insertMeeting} = require("../handler/meeting/command/MeetingCommand");
const {getAllMeeting} = require("../handler/meeting/query/MeetingQuery");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.get('/meetings',[justLogin,adminGuard],getAllMeeting)
router.post('/insert/meeting',[justLogin,adminGuard],insertMeeting)

module.exports = router
