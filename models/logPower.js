const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogPower extends LogReason {
    constructor(params = {}) {
        check.check('logPower', params)
        super(params)
        this.oldPower = params.oldPower || 0
        this.newPower = params.newPower || 0
        this.addOrReduce = util.getChanged(this.newPower, this.oldPower)
        this.power = Math.abs(this.newPower - this.oldPower)

    }

    toLogStr() {
        return util.toLogStr('log_power', super.toLogStr(), this.addOrReduce, this.oldPower, this.newPower, this.power)
    }
}