const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils')

module.exports = class LogRegU extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        super(params)
        this.devices = new LogDevices(devices)
    }

    toString() {
        return util.toLogStr('log_reg_u', super.toUString(), this.devices.toString())
    }
}