const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils')
const check = require('./check')

module.exports = class LogLoginU extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        check.check('logLoginU', params)
        super(params)
        this.devices = new LogDevices(devices)
    }

    toLogStr() {
        return util.toLogStr('log_login_u', super.toUString(), this.devices.toLogStr())
    }
}