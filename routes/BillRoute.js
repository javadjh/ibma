const express = require('express')
const {getUsersBill} = require("../handler/bill/query/BillQuery");
const {getBills} = require("../handler/bill/query/BillQuery");
const {adminGuard} = require("../middlewares/Auth");
const {justLogin} = require("../middlewares/Auth");
const {upsertBill} = require("../handler/bill/command/BillCommand");
const router = express.Router()

router.post('/upsert/bill',[justLogin,adminGuard],upsertBill)
router.get('/bills',[justLogin,adminGuard],getBills)
router.get('/bills/user',[justLogin,adminGuard],getUsersBill)

module.exports = router
