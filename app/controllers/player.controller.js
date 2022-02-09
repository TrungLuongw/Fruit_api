const Player = require("../models/player.model.js")


let getAll = (req, res) => {
    Player.getAll((Data, err) => {
        if (err) {
            return res.status(400).send({
                message: err,
                data: []
            })
        }
        else {
            return res.status(200).json({
                message: 'ok',
                data: Data
            })
        }
    })
}
let update = (req, res) => {
    let { name, point } = req.body;
    console.log(req.body)
    Player.updatePlayer(name, point, (result) => {
        if (result === true) {
            return res.status(400).send({
                message: 'FAIL',
                data: []
            })
        }
        return res.status(200).send({
            message: result,
            data: []
        })

    })


}
module.exports = {
    getAll, update
}