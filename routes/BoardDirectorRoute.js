const express = require('express')
const {deleteBoardDirector} = require("../handler/boardDirector/command/BoardDirectorCommand");
const {adminGuard} = require("../middlewares/Auth");
const {insertBoardDirector} = require("../handler/boardDirector/command/BoardDirectorCommand");
const {justLogin} = require("../middlewares/Auth");
const {getBoardDirector} = require("../handler/boardDirector/query/BoardDirectorQuery");
const route = express.Router()

route.get('/boarddirectors',[justLogin],getBoardDirector)
route.post('/insert/boarddirector',[justLogin,adminGuard],insertBoardDirector)
route.delete('/boarddirector/:id',[justLogin,adminGuard],deleteBoardDirector)

module.exports = route
