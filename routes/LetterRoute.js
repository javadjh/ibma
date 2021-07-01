const express = require("express")
const {getLetter} = require("../handler/letter/query/letterQuery");
const {insertLetter} = require("../handler/letter/command/letterCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const route = express.Router()

route.post("/insert/letter",[justLogin,adminGuard],insertLetter)
route.get("/letters",[justLogin],getLetter)

module.exports = route
