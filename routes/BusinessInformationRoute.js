const express = require('express')
const {getAllBusinessInformation} = require("../handler/businessInformation/query/BusinessInformationQuery");
const {upsertBusinessInformation} = require("../handler/businessInformation/command/BusinessInformationCommand");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/upsert/business/information',[justLogin],upsertBusinessInformation)
router.get('/business/information',[justLogin],getAllBusinessInformation)

module.exports = router
