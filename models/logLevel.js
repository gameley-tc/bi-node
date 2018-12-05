const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogLevel extends LogReason {
    constructor(params = {}) {
        check.check('logLevel', params)
        super(params)
        this.heroId = params.heroId || ''
        this.newLevel = params.newLevel || 0
        this.num = Math.abs(this.newLevel - this.level)
    }

    toLogStr() {
        return util.toLogStr('log_level', super.toLogStr(), this.heroId, this.newLevel, this.num)
    }
}