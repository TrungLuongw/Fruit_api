
const Player = require('../models/player.model')

const index = (req, res, next) => {
    Player.find().then(response => {
        res.json({
            response
        })

    }).catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const show = (req, res, next) => {


    console.log(req.body)


}

//add new player 
const store = (req, res, next) => {
    let player = new Player({
        name: req.body.name,
        point: req.body.point
    })
    player.save()
        .then(response => {
            res.json({
                message: 'Player added successfully !'
            })
        }).catch(error => {
            res.json({
                message: 'an error occured !'
            })
        })
}

const update = (req, res, next) => {
    let playerID = req.body.playerID

    let updateData = {
        name: req.body.name,
        point: req.body.point
    }

    Player.findByIdAndUpdate(playerID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'update new point successfully !'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error occured!(update)'
            })
        })
}

//delete 



module.exports = {
    index, show, store, update
}


