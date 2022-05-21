var express = require('express');
var router = express.Router();
const billcontroller = require("../Bill/bill.controller")

router.get("/:id", billcontroller.findById)
router.get("/gettotal/:id", billcontroller.getTotalById)
router.post("/updatebillfruits/:id")

module.exports = router