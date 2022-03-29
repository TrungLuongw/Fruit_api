
const { response } = require('express')
const { Double } = require('mongodb')
const { now } = require('mongoose')
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
// Thêm mẫu mới 
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

//edit tất cả thông tin
const edit = async (req, res, next) => {
    let ID = req.params.id
    console.log(req.body.name)
    await fruitModel.updateOne({ _id: ID }, {
        $set: {
            name: req.body.name,
            season: req.body.season,
            country: req.body.country,
            price: Number(req.body.price),
            unit: req.body.unit,
            remain: Number(req.body.remain),
            sold: Number(req.body.sold),
            url: req.body.url,
            description: req.body.description,
            updateAt: new Date
        }
    }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(400).json({
            message: "Update fail !"
        })
    })

}
//tăng số lượng remain (remain = old + new)
const incrRemain = (req, res, next) => {
    let ID = req.params.id
    fruitModel.findOneAndUpdate({ _id: ID }, {
        $inc: {
            remain: Number(req.body.remain),

        }, $set: {
            updateAt: new Date
        }
    }, { new: true }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        console.log(error)
        res.status(400).json({
            message: "add to remain fail !"
        })
    })

}
const getOne = (req, res, next) => {
    let ID = req.params.id
    fruitModel.findOne({ _id: ID }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}

module.exports = { getAll, storage, edit, incrRemain, getOne }