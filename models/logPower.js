const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogPower extends LogReason {
    constructor(params = {}) {
        super(params)
        this.oldPower = params.oldPower || 0
        this.newPower = params.newPower || 0
        this.addOrReduce = util.getChanged(this.newPower, this.oldPower)
        this.power = Math.abs(this.newPower - this.oldPower)

    }

    toString() {
        return util.toLogStr('log_power', super.toString(), this.addOrReduce, this.oldPower, this.newPower, this.power)
    }
}