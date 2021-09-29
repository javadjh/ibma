const express = require("express")
const {setUserLetterSeen} = require("../handler/letter/query/letterQuery");
const {getUsersLetter} = require("../handler/letter/query/letterQuery");
const {getLetter} = require("../handler/letter/query/letterQuery");
const {insertLetter} = require("../handler/letter/command/letterCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const route = express.Router()

route.post("/insert/letter",[justLogin,adminGuard],insertLetter)
route.get("/letters",[justLogin,adminGuard],getLetter)
route.get("/letters/user",[justLogin],getUsersLetter)
route.put("/letter/seen/:id",[justLogin],setUserLetterSeen)

module.exports = route
