const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogEnergy extends LogReason {
    constructor(params = {}) {
        super(params)
        this.oldEnergy = params.oldEnergy || 0
        this.newEnergy = params.newEnergy || 0
        this.addOrReduce = util.getChanged(this.newEnergy, this.oldEnergy)
        this.energy = Math.abs(this.newEnergy - this.oldEnergy)
    }

    toString() {
        return util.toLogStr('log_energy', super.toString(), this.addOrReduce, this.oldEnergy, this.newEnergy, this.energy)
    }
}