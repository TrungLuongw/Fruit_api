const fruitModel = require('../Fruits/fruit.model')
const Bill = require('./bill.model')
const fruit = require('../Fruits/fruit.model')
const getAll = (req, res, next) => {
    Bill.find({ status: 1 }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}

const getOne = (req, res, next) => {
    Bill.findOne({ status: 0, idDevice: req.body.idDevice })
        .then(response => {
            res.status(200).json({
                response
            })
        }).catch(error => {
            res.status(404).json({
                message: 'an error occured !'
            })
        })
}
//patch
const confirm = (req, res, next) => {
    let id = req.params.id
    Bill.findOneAndUpdate(id, {
        $set: {
            status: 1
        }
    }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}
//patch
const updateItems = async (req, res, next) => {
    let id = req.params.id
    let arrID = req.body.idFruits
    let arrWeight = req.body.weights
    let totalPrice = (arrID, arrWeight) => {
        const records = await fruitModel.find().where('_id').in(arrID).exec()
        let price = 0
        records.forEach(child => {
            arrID.forEach((id, index) => {
                if (child.id == id) {
                    price += child.price * arrWeight[index]

                }
            })
        })
        return price
    }

    Bill.findOneAndUpdate(id, {
        $set: {
            idFruits: arrID,
            weights: arrWeight,
            totalPrice: price
        }
    }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}

