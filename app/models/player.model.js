const mongoose = require('mongoose')
const schema = mongoose.Schema

const player = new schema({
    name: {
        type: String

    },
    point: {
        type: String
    }
}, { timestamps: true })

const Player = mongoose.model('Player', player)
module.exports = Player