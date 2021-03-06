const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogBattle extends LogReason {
    constructor(params = {}) {
        check.check('logBattle', params)
        super(params)
        this.logType = params.logType || 1
        this.battleType = params.battleType || 1
        this.battleId = params.battleId || 1
        this.time = params.time || 0
    }

    toLogStr() {
        return util.toLogStr('log_battle', super.toLogStr(), this.logType, this.battleType, this.battleId, this.time)
    }
}