const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils/index')

module.exports = class LogAppOnce extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        super(params)
        devices.deviceId = devices.deviceId || params.uuid || ''
        this.devices = new LogDevices(devices)
        this.actionNumber = params.actionNumber || 0
    }

    toLogStr() {
        return util.toLogStr('log_app_once', super.toLogStr(), this.devices.toLogStr(), this.actionNumber)
    }
}