const express = require('express')
const {getUser} = require("../handler/user/command/userCommand");
const {adminGuard} = require("../middlewares/Auth");
const {login} = require("../handler/user/query/userQuery");
const {deleteUser} = require("../handler/user/command/userCommand");
const {justLogin} = require("../middlewares/Auth");
const {upsertUser} = require("../handler/user/command/userCommand");
const {getUsers} = require("../handler/user/query/userQuery");
const route = express.Router()

route.get("/users",[justLogin,adminGuard],getUsers)
route.post("/upsert/user",[justLogin,adminGuard],upsertUser)
route.delete("/user/:id",[justLogin,adminGuard],deleteUser)
route.get("/user/:id",[justLogin,adminGuard],getUser)
route.post("/login",login)

module.exports = route
