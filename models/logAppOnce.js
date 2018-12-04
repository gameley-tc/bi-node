const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils/index')

module.exports = class LogAppOnce extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        super(params)
        this.devices = new LogDevices(devices)
        this.actionNumber = params.actionNumber || 0
    }

    toString() {
        return util.toLogStr('log_app_once', super.toString(), this.devices.toString(), this.actionNumber)
    }
}