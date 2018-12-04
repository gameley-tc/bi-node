const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils')

module.exports = class LogLoginU extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        super(params)
        this.devices = new LogDevices(devices)
    }

    toString() {
        return util.toLogStr('log_login_u', super.toUString(), this.devices.toString())
    }
}