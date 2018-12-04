const LogRole = require('./base/logRole')
const util = require('../utils')
const check = require('./check')

module.exports = class LogShareIn extends LogRole {
    constructor(params = {}, devices = {}) {
        check.check('logShareIn', params)
        super(params)
        this.type = params.type || 1
        this.newPlayer = params.newPlayer || 0
    }

    toString() {
        return util.toLogStr('log_share_in', super.toString(), this.type, this.newPlayer)
    }
}