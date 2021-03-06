const LogPlat = require('./logPlat')
const config = require('../../config')
const util = require('../../utils/index')

module.exports = class LogAccountRole extends LogPlat {
    constructor(params = {}) {
        super(params)
        this.gameId = config.game || 0
        this.uid = params.uid || params.uuid || ''
        this.regionId = params.regionId || config.region
        this.level = params.level || 0
        this.reged = params.reged || 0
    }

    toLogStr() {
        return util.toLogStr(this.uuid, this.uid, this.gameId, this.platId, this.regionId, this.channelId, this.dt, this.level, this.reged)
    }
    toUString() {
        return util.toLogStr(this.uuid, this.gameId, this.platId, this.channelId, this.dt)
    }
}