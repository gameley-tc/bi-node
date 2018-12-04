const LogPlat = require('./base/logPlat')
const util = require('../utils/index')

module.exports = class LogCu extends LogPlat {
    constructor(params = {}) {
        super(params)
        this.payNum = params.payNum || 0
        this.payNotNum = params.payNotNum || 0
    }

    toString() {
        return util.toLogStr('log_cu', this.platId, this.regionId, this.channelId, this.dt, this.payNum, this.payNotNum)
    }
}