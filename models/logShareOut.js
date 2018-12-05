const LogRole = require('./base/logRole')
const util = require('../utils')
const check = require('./check')

module.exports = class LogShareOut extends LogRole {
    constructor(params = {}, devices = {}) {
        check.check('logShareOut', params)
        super(params)
        this.type = params.type || 1
    }

    toLogStr() {
        return util.toLogStr('log_share_out', super.toLogStr(), this.type)
    }
}