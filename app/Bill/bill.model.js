const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Bill = new Schema({
    id: ObjectId,
    idFruits: [mongoose.type.ObjectId],
    weights: [Number],
    totalPrice: { type: Number },
    idDevice: { type: Number, default: 111 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('bill', Bill)