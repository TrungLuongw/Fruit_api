
let router = require('express').Router()

const fruitController = require('./fruit.controller')
router.get('/', fruitController.getAll)
router.post('/', fruitController.storage)
router.put('/:id', fruitController.edit)
router.get('/:id', fruitController.getOne)
router.patch('/:id', fruitController.incrRemain)

module.exports = router
//get : lay data
//post: them data
// put : update data
// delete : xoa du lieu