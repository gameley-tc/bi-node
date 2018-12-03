const util = require('../utils')

module.exports = class LogPlat {
    constructor(channelId, uuid) {
        this.uuid = uuid
        this.platId = channelId % 100
        this.channelId = channelId
        this.dt = util.now()
    }
}