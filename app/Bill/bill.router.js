var express = require('express');
var router = express.Router();
const billcontroller = require("../Bill/bill.controller")

router.get("/:code", billcontroller.findByCode)
router.get("/gettotal/:id", billcontroller.getTotalById)
router.post("/updatebillfruits/:id")

module.exports = router