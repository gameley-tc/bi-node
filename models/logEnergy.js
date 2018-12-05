const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogEnergy extends LogReason {
    constructor(params = {}) {
        check.check('logEnergy', params)
        super(params)
        this.oldEnergy = params.oldEnergy || 0
        this.newEnergy = params.newEnergy || 0
        this.addOrReduce = util.getChanged(this.newEnergy, this.oldEnergy)
        this.energy = Math.abs(this.newEnergy - this.oldEnergy)
    }

    toLogStr() {
        return util.toLogStr('log_energy', super.toLogStr(), this.addOrReduce, this.oldEnergy, this.newEnergy, this.energy)
    }
}