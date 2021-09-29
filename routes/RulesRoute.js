const express = require('express')
const {deleteRule} = require("../handler/rules/command/RulesCommand");
const {getSingleRules} = require("../handler/rules/query/RulesQuery");
const {getAllRules} = require("../handler/rules/query/RulesQuery");
const {upsertRule} = require("../handler/rules/command/RulesCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post("/upsert/rule",[justLogin,adminGuard],upsertRule)
router.get("/rules",[justLogin],getAllRules)
router.get("/rule/:id",[justLogin],getSingleRules)
router.delete("/rule/:id",[justLogin,adminGuard],deleteRule)

module.exports = router
