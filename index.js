const dgram = require('dgram')
const config = require('./config')
const logAction = require('./models/logAction')


module.exports = {
    init(option = {}) {
        config.init(option)
    },
    sendX(biModel) {
        let client = dgram.createSocket("udp4")
        client.send(biModel.toString(), config.port, config.ip, (err, bytes) => {
            client.close()
        })
    },
    logAction
}