const fruitModel = require('./fruit.model')

const getFruitsByArrId = (arrID) => {

    fruitModel.find({ _id: { '$in': { arrID } } })
        .then(response => {
            return response
        })

    return data

}
module.exports = { getFruitsByArrId }