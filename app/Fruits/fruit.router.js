
let router = require('express').Router()

const fruitController = require('./fruit.controller')
router.get('/', fruitController.getAll)
router.post('/strorage', fruitController.storage)

module.exports = router