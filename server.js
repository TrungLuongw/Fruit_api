const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const configViewEngine = require('./app/config/viewEngine')
const cors = require('cors')
//const PlayerRouter = require('./app/example/routers/player.routers')
const fruitRouter = require('./app/Fruits/fruit.router')

const db = require('./app/config/db.config')
db.connect();

//access control allow another domain
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const corsOption = {
    "origin": "*",
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use(cors(corsOption))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running on port :' + PORT)
})
//configViewEngine(app)

//app.use('/api/player', PlayerRouter)
app.use('/api/product', fruitRouter)