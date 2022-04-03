
let router = require('express').Router()
const multer = require('multer')
const fruitController = require('./fruit.controller')



router.get('/getAll', fruitController.getAll)
router.post('/delete/:id', fruitController.deleteFruit)
router.post('/editPrice/:id', fruitController.editPrice)
router.post('/addQuantity/:name', fruitController.incrRemain)



router.post('/', fruitController.storage)
router.put('/:id', fruitController.edit)
router.get('/:id', fruitController.getOne)
router.patch('/:id', fruitController.incrRemain)

module.exports = router
//get : lay data
//post: them data
// put : update data
// delete : xoa du lieu