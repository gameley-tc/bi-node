const LogRole = require('./base/logRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils')
const check = require('./check')

module.exports = class LogReg extends LogRole {
    constructor(params = {}, devices = {}) {
        check.check('logReg', params)
        super(params)
        this.devices = new LogDevices(devices)
    }

    toLogStr() {
        return util.toLogStr('log_reg', super.toRegLogStr(), this.devices.toLogStr())
    }
}