const LogRole = require('./logRole')
const util = require('../../utils/index')

module.exports = class LogRole extends LogRole {
    constructor(params = {}) {
        this.sequenceId = params.sequenceId || ''
        this.reason = params.reason || ''
        this.subReason = params.subReason || ''
    }

    toString() {
        return util.toLogStr(super.toString(), this.sequenceId, this.reason, this.subReason)
    }
}