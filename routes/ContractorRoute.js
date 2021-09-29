const express = require('express')
const {deleteContractor} = require("../handler/contractor/command/ContractorCommand");
const {getAllContractors} = require("../handler/contractor/query/ContractorQuery");
const {insertContractor} = require("../handler/contractor/command/ContractorCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/insert/contractor',[justLogin,adminGuard],insertContractor)
router.get('/contractors',[justLogin],getAllContractors)
router.delete('/contractor/:id',[justLogin,adminGuard],deleteContractor)

module.exports = router
