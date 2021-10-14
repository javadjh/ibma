const express = require('express')
const {getAllSurvey, getUsersSurvey, getUsersSingleSurvey, getSingleSurveyAdmin} = require("../handler/survey/query/SurveyQuery");
const {insertSurveyAdmin, submitUserSurvey} = require("../handler/survey/command/SurveyCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post("/insert/survey",[justLogin,adminGuard],insertSurveyAdmin)
router.get("/surveys",[justLogin,adminGuard],getAllSurvey)
router.get("/survey/:id",[justLogin,adminGuard],getSingleSurveyAdmin)
//users
router.get("/users/surveys",[justLogin],getUsersSurvey)
router.get("/users/survey/:id",[justLogin],getUsersSingleSurvey)
router.post("/submit/users/survey",[justLogin],submitUserSurvey)

module.exports = router
