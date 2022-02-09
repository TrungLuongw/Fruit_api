const pool = require("../config/db.config.js")

const Player = function (player) {
    this.id = player.id
    this.name = player.name
    this.point = player.point
}


Player.getAll = async (result) => {
    let query = "SELECT * FROM dataplayer "

    const [rows, fields] = await pool.execute(query)
    console.log('---------------')
    rows.forEach((child, index) => {
        console.log(index + ':' + child.name)
    })
    if (rows.length <= 0) {

        result(null, 'not found data')
        return
    }
    result(rows, null);

}
Player.updatePlayer = async (name, point, result) => {

    let query = "SELECT * FROM dataplayer WHERE point = (SELECT Min(point) FROM dataplayer)"

    const [rows, fields] = await pool.execute(query)
    console.log(rows[0].point + ".." + point)
    if (rows.length > 0) {
        if (rows[0].point < point) {

            await pool.execute("UPDATE dataplayer SET name = ?, point = ? WHERE id = ?", [name, point, rows[0].id])
            result('successfully !')
            return
        }
        else {
            result('no update !')
            return
        }


    }
    result(true)

}

module.exports = Player