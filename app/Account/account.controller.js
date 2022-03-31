
const { json } = require('express/lib/response');
const accountmodel = require("./account.model")

const getAll = (req, res, next) => {
    accountmodel.find({})
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({
                    message: "no account"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'an error occured !'
            })
        })
}
const add = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;

    accountmodel.findOne({
        username: username
    })
        .then(data => {
            if (data) {
                res.json({ message: "data already available" })
            } else {
                let acc = new accountmodel({
                    username: username,
                    password: password,
                    role: role
                })
                acc.save();
                res.json({ message: "add new account successfully" })
            }
        })
        .catch(err => {
            json.status(500).json({ message: "server error" })
        })
}
const getById = (req, res, next) => {
    var id = req.params.id;
    accountmodel.findById(id)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({
                    message: "account not found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "server error"
            })
        })
}
const update = (req, res, next) => {
    var id = req.params.id;
    var password = req.body.password;
    var role = req.body.role;
    accountmodel.findByIdAndUpdate(id, {
        password: password,
        role: role
    })
        .then(data => {
            res.json({ message: "update account successfully" })
        })
        .catch(err => {
            res.status(500).json({ message: "server error" })
        })
}
const Delete = (req, res, next) => {
    var id = req.params.id;
    accountmodel.deleteOne({ _id: id })
        .then(data => {
            res.json({ message: "delete account sucessfully" })
        })
        .catch(err => {
            res.status(500).json({ message: "server error" })
        })
}
module.exports = { getAll, getById, add, update, Delete }