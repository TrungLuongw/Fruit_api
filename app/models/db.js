const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user01:pass01@cluster0.mcvsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("data_player").collection("player");
    console.log(collection.find({}))
    client.close();
});
module.exports = {
    client
}

