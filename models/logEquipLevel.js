const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogEquipLevel extends LogReason {
    constructor(params = {}) {
        this.equipType = params.equipType || 0
        this.equipId = params.equipId || 0
        this.equipOldLevel = params.equipOldLevel || 0
        this.equipNewLevel = params.equipNewLevel || 0
        this.equipLevel = Math.abs(this.equipNewLevel = this.equipOldLevel)
    }

    toString() {
        return util.toLogStr('log_equip_Level', super.toString(), this.equipType, this.equipId, this.equipOldLevel, this.equipNewLevel, this.equipLevel)
    }
}