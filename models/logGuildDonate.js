const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogGuildDonate extends LogReason {
    constructor(params = {}) {
        check.check('logGuildDonate', params)
        super(params)
        this.guildId = params.guildId || 0
    }

    toLogStr() {
        return util.toLogStr('log_guild_donate', super.toLogStr(), this.guildId)
    }
}