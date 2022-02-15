const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PlayerRouter = require('./app/routers/player.routers')
mongoose.connect('mongodb+srv://user01:pass01@cluster0.mcvsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log('database coonnection established!')

})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running on port :' + PORT)
})

app.use('/api/player', PlayerRouter)