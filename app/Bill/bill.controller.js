const { data } = require("jquery")
const billmodel = require("../Bill/bill.model")


const findById = async (req, res, next) => {

    var id = req.params.id
    await billmodel.find({ _id: id }).populate("user", "username").populate({
        'path': 'Fruits',
        'populate': {
            'path': 'idFruit'
        }
    })
        .then(data => {
            if (data) {
                res.json(data)
            } else {
                res.status(404).json({
                    message: "bill not found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "server error"
            })
        })
}

const getTotalById = async (req, res, next) => {
    var id = req.params.id
    await billmodel.findById(id).then(data => {
        if (data) {
            res.json({ totalprice: data.totalPrice })
        } else {
            res.status(404).json({
                message: "bill not found"
            })
        }
    })
        .catch(err => {
            res.status(500).json({
                message: "server error"
            })
        })
}



module.exports = { findById, getTotalById }
