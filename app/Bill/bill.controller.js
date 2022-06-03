const { data } = require("jquery")
const billmodel = require("../Bill/bill.model")
const Fruit = require('../Fruits/fruit.model')

const findByCode = async (req, res, next) => {

    try {
        var code = req.params.code
        var rs = await billmodel.findOne({ code }).populate('LisFruits.idfruit')
        console.log(rs.LisFruits)
        if (rs) {
            res.json(rs);
        } else {
            res.status(404).json({
                message: "bill not found"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: "server error"
        })
    }
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
const update = async (req, res, next) => {
    await billmodel.findByIdAndUpdate(req.params.id, {
        $inc: {

        }
    })

}


module.exports = { findByCode, getTotalById }