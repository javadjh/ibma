const express = require('express')
const {getAllSurvey} = require("../handler/survey/query/SurveyQuery");
const {insertSurveyAdmin} = require("../handler/survey/command/SurveyCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post("/insert/survey",[justLogin,adminGuard],insertSurveyAdmin)
router.get("/surveys",[justLogin,adminGuard],getAllSurvey)

module.exports = router
