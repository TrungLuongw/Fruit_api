
const { response } = require('express')
const { Double } = require('mongodb')
const fruitModel = require('./fruit.model')

const getAll = (req, res, next) => {
    fruitModel.find().then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}

const storage = (req, res, next) => {
    let fruit = new fruitModel({
        name: req.body.name,
        season: req.body.season,
        country: req.body.country,
        price: Number(req.body.price),
        unit: req.body.unit,
        remain: Number(req.body.remain),
        sold: Number(req.body.sold),
        url: req.body.url,
        description: req.body.description,
    })
    fruit.save()
        .then(response => {
            res.status(200).json({
                message: 'Add new product successfully !'
            })
        }).catch(error => {
            res.json({
                message: 'an error occured !'
            })
        })
}

module.exports = { getAll, storage }