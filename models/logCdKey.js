const LogRole = require('./base/logRole')
const util = require('../utils/index')
const check = require('./check')

module.exports = class LogCdKey extends LogRole {
    constructor(params = {}) {
        check.check('logCdKey', params)
        super(params)
        this.actionId = params.actionId || ''
        this.cdkey = params.cdkey || ''
        this.prize = params.prize || ''
        this.failReason = params.failReason || ''
    }

    toLogStr() {
        return util.toLogStr('log_cdkey', super.toLogStr(), this.actionId, this.cdkey, this.prize, this.failReason)
    }
}