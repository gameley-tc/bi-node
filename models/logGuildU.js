const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogGuildU extends LogReason {
    constructor(params = {}) {
        check.check('logGuildU', params)
        super(params)
        // 1 加入公会 2 退出公会
        this.logType = params.logType || 1
        this.guildId = params.guildId || 0
    }

    toString() {
        return util.toLogStr('log_guild_u', super.toString(), this.logType, this.guildId)
    }
}