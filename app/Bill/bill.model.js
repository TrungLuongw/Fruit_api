const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Bill = new Schema({
    id: ObjectId,
    fruits: [{
        idFruit: {
            type: mongoose.ObjectId,
            ref: 'fruits'
        },
        weight: {
            type: Number
        }
    }],
    totalPrice: { type: Number },
    status: { type: Number, default: 0 },
    user: {
        type: mongoose.ObjectId,
        ref: 'accounts'
    },

}
    ,
    { timestamps: true }
)

module.exports = mongoose.model('bill', Bill)