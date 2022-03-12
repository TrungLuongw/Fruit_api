
const fruitModel = require('./fruit.model')


const getALl = (req, res, next) => {
    fruitModel.find().then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({

        })
    })

}

