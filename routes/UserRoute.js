const express = require('express')
const {getUsersHomeNumber} = require("../handler/user/query/userQuery");
const {autoComplete} = require("../handler/user/query/userQuery");
const {getUser} = require("../handler/user/command/userCommand");
const {adminGuard} = require("../middlewares/Auth");
const {login} = require("../handler/user/query/userQuery");
const {deleteUser} = require("../handler/user/command/userCommand");
const {justLogin} = require("../middlewares/Auth");
const {upsertUser} = require("../handler/user/command/userCommand");
const {getUsers} = require("../handler/user/query/userQuery");
const route = express.Router()

route.get("/users",[justLogin,adminGuard],getUsers)
route.get("/users/auto",[justLogin,adminGuard],autoComplete)
route.post("/upsert/user",[justLogin,adminGuard],upsertUser)
route.delete("/user/:id",[justLogin,adminGuard],deleteUser)
route.get("/user/:id",[justLogin,adminGuard],getUser)
route.post("/login",login)
//user
route.get("/users/homenumber",[justLogin],getUsersHomeNumber)

module.exports = route
