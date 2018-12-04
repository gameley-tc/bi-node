const LogPlat = require('./logPlat')
const util = require('../../utils/index')
const config = require('../../config')

module.exports = class LogRole extends LogPlat {
    constructor(params = {}) {
        super(params)
        this.regDt = params.regDt || util.now()
        this.uid = params.uid
        this.regionId = params.regionId || config.region
        this.level = params.level || 0
        this.reged = params.reged || 0
        this.vip = params.vip || 0
        this.payed = params.payed || 0
    }

    toString() {
        return [this.uuid, this.uid, this.platId, this.regionId, this.channelId, this.dt, this.level, this.reged, this.vip, this.payed].join('|')
    }
}