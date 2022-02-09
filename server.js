var initPlayerRouter = require('./app/routers/player.routers.js')
var express = require("express")
var cors = require("cors")
var app = express();
var corsOption = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
initPlayerRouter(app)
// app.get('/', (req, res) => {
//     console.log('login')
// })
// handle 404

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`)
})