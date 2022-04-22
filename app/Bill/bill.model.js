const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Bill = new Schema({
    id: ObjectId,
    Fruits: [{
        idFruit: {
            type: mongoose.ObjectId,
            ref: 'Fruits'
        },
        weight: {
            type: Number
        }
    }],
    status: { type: Number, default: 0 },
    totalPrice: { type: Number },
    code: { type: Number }
}
    ,
    { timestamps: true }
)

module.exports = mongoose.model('bills', Bill)