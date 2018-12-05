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

    toLogStr() {
        return util.toLogStr('log_share_in', super.toLogStr(), this.type, this.newPlayer)
    }
}