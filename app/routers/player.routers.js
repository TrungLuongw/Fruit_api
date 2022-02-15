
let router = require("express").Router();
const { route } = require("express/lib/application");
const PlayerController = require('../controllers/player.controller')

router.get('/', PlayerController.index)
router.post('/show', PlayerController.show)
router.post('/update', PlayerController.update)
router.post('/store', PlayerController.store)

module.exports = router


