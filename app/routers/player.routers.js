
let router = require("express").Router();
const playerController = require('../controllers/player.controller')
const initPlayerRouter = (app) => {
    console.log('da vao duoc router')
    router.get('/', playerController.getAll)
    router.put('/update', playerController.update)
    app.use('/api/dataPlayer', router)
}
module.exports = initPlayerRouter


