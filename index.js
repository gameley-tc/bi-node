const dgram = require('dgram')
const logAccountRole = require('./models/LogAccountRole')

module.exports = {
    gameId: 1,
    ip: "127.0.0.1",
    port: 8088,
    region: 1010001,

    init(option = {}) {
        Object.assign(this, option)
    },

    send(biModel) {
        let client = dgram.createSocket("udp4")
        client.send(biModel.toString(), this.port, this.ip, (err, bytes) => {
            client.close()
        })
    },

    logAccountRole
}