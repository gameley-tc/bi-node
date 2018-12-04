const util = require('../../utils')
const config = require('../../config')

module.exports = class LogPlat {
    constructor(params = {}) {
        this.uuid = params.uuid || params.uid || ''
        this.channelId = params.channelId || config.channel
        this.regionId = params.regionId || config.region
        this.platId = this.channelId % 100
        this.dt = util.now()
    }
}