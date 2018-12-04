const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogBattle extends LogReason {
    constructor(params = {}) {
        this.logType = params.logType || 1
        this.battleType = params.battleType || 1
        this.battleId = params.battleId || 1
        this.time = params.time || 0
    }

    toString() {
        return util.toLogStr('log_battle', super.toString(), this.logType, this.battleType, this.battleId, this.time)
    }
}