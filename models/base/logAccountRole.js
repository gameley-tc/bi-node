const LogPlat = require('./logPlat')
const config = require('../../config')

module.exports = class LogAccountRole extends LogPlat {
    constructor(params = {}) {
        super(params)
        this.gameId = config.gameId
        this.uid = params.uid || ''
        this.regionId = params.regionId || config.region
        this.level = params.level || 0
        this.reged = params.reged || 0
    }

    toString() {
        return [this.uuid, this.uid, this.platId, this.regionId, this.channelId, this.dt, this.level, this.reged].join('|')
    }
}