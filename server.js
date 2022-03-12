const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const configViewEngine = require('./app/config/viewEngine')
//const PlayerRouter = require('./app/example/routers/player.routers')

const db = require('./app/config/db.config')
db.connect();

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running on port :' + PORT)
})
configViewEngine(app)

///app.use('/api/player', PlayerRouter)