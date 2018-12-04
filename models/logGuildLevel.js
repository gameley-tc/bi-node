const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogGuildLevel extends LogReason {
    constructor(params = {}) {
        check.check('logGuildLevel', params)
        super(params)
        // 公会ID
        this.guildId = params.guildId || 0
        this.guildOldLevel = params.guildOldLevel || 0
        this.guildNewLevel = params.guildNewLevel || 0
        this.guildLevel = Math.abs(this.guildNewLevel - this.guildOldLevel)
    }

    toString() {
        return util.toLogStr('log_guild_level', super.toGuildString(), this.guildId, this.guildOldLevel, this.guildNewLevel, this.guildLevel)
    }
}