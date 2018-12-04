const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogGuild extends LogReason {
    constructor(params = {}) {
        check.check('logGuild', params)
        super(params)
        this.logType = params.logType || 1
        this.guildId = params.guildId || 0
    }

    toString() {
        return util.toLogStr('log_guild', super.toString(), this.logType, this.guildId)
    }
}