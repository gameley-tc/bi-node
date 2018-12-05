const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils')
const check = require('./check')

module.exports = class LogRegU extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        check.check('logRegU', params)
        super(params)
        this.devices = new LogDevices(devices)
    }

    toLogStr() {
        return util.toLogStr('log_reg_u', super.toUString(), this.devices.toLogStr())
    }
}