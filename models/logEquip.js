const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogEquip extends LogReason {
    constructor(params = {}) {
       this.addOrReduce = params.addOrReduce || 0
       this.equipType = params.equipType || 0
       this.equipId = params.equipId || 0
       this.num = params.num || 0
    }

    toString() {
        return util.toLogStr('log_equip', super.toString(), this.addOrReduce, this.equipType, this.equipId, this.num)
    }
}