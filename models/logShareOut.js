const LogRole = require('./base/logRole')
const util = require('../utils')

module.exports = class LogShareOut extends LogRole {
    constructor(params = {}, devices = {}) {
        super(params)
        this.type = params.type || 1
    }

    toString() {
        return util.toLogStr('log_share_out', super.toString(), this.type)
    }
}