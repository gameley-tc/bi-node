const LogRole = require('./base/logRole')
const util = require('../utils')
check.check('logAction', params)

module.exports = class LogShareOut extends LogRole {
    constructor(params = {}, devices = {}) {
        check.check('logShareOut', params)
        super(params)
        this.type = params.type || 1
    }

    toString() {
        return util.toLogStr('log_share_out', super.toString(), this.type)
    }
}