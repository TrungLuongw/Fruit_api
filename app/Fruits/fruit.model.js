const { Double } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


const Fruit = new Schema({
    id: ObjectId,
    name: { type: String, maxlength: 200 },
    season: { type: String, maxlength: 200 },
    country: { type: String, maxlength: 200 },
    price: { type: Double },
    unit: { type: String, default: 'VND' },
    remain: { type: Double },
    sold: { type: Double },
    url: { type: String },
    description: { type: String, maxlength: 1000 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Fruits', Fruit)