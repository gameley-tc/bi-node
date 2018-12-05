const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogEquipDegree extends LogReason {
    constructor(params = {}) {
        check.check('logEquipDegree', params)
        super(params)
        this.equipType = params.equipType || 0
        this.equipId = params.equipId || 0
        this.equipOldDegree = params.equipOldDegree || 0
        this.equipNewDegree = params.equipNewDegree || 0
        this.equipDegree = Math.abs(this.equipNewDegree - this.equipOldDegree)
    }

    toLogStr() {
        return util.toLogStr('log_equip_degree', super.toLogStr(), this.equipType, this.equipId, this.equipOldDegree, this.equipNewDegree, this.equipDegree)
    }
}