const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogLevel extends LogReason {
    constructor(params = {}) {
        super(params)
        this.heroId = params.heroId || ''
        this.newLevel = params.newLevel || 0
        this.num = params.num || 0
    }

    toString() {
        return util.toLogStr('log_level', super.toString(), this.heroId, this.newLevel, this.num)
    }
}