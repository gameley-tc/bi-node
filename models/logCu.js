const LogPlat = require('./base/logPlat')
const config = require('../config')
const util = require('../utils/index')
const check = require('./check')

module.exports = class LogCu extends LogPlat {
    constructor(params = {}) {
        check.check('logCu', params)
        super(params)
        this.regionId = params.regionId || config.region
        this.payNum = params.payNum || 0
        this.payNotNum = params.payNotNum || 0
    }

    toString() {
        return util.toLogStr('log_cu', this.platId, this.regionId, this.channelId, this.dt, this.payNum, this.payNotNum)
    }
}