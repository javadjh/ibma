const express = require('express')
const {getAllResidentialUnit} = require("../handler/residentialUnit/query/ResidentialUnitQuery");
const {getSingleResidentialUnit} = require("../handler/residentialUnit/query/ResidentialUnitQuery");
const {upsertResidentialUnit} = require("../handler/residentialUnit/command/ResidentialUnitCommand");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const router = express.Router()

router.post('/upsert/residential/unit',[justLogin,adminGuard],upsertResidentialUnit)
router.get('/residential/unit/:id',[justLogin,adminGuard],getSingleResidentialUnit)
router.get('/residential/units',[justLogin,adminGuard],getAllResidentialUnit)

module.exports = router
