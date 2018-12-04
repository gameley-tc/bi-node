const LogRole = require('./logRole')
const util = require('../../utils/index')

module.exports = class LogReason extends LogRole {
    constructor(params = {}) {
        super(params)
        this.sequenceId = params.sequenceId || ''
        this.reason = params.reason || ''
        this.subReason = params.subReason || ''
    }

    toString() {
        return util.toLogStr(super.toString(), this.sequenceId, this.reason, this.subReason)
    }

    toGuildString() {
        return util.toLogStr(this.platId, this.regionId, this.dt, this.sequenceId, this.reason, this.subReason)
    }
}