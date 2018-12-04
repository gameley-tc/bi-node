const LogRole = require('./base/logRole')
const LogDevices = require('./base/logDevices')
const util = require('../utils')
const check = require('./check')

module.exports = class LogLogin extends LogRole {
    constructor(params = {}, devices = {}) {
        check.check('logLogin', params)
        super(params)
        this.devices = new LogDevices(devices)
        this.loginType = params.loginType || 0
        this.friendsNum = params.friendsNum || 0
        this.online = params.online || 0
        this.power = params.power || 0
        this.energy = params.energy || 0
        this.guildId = params.guildId || 0
        this.roleName = params.roleName || ''
    }

    toString() {
        return util.toLogStr('log_login', super.toString(), this.devices.toString(), this.loginType, this.friendsNum, this.online, this.power, this.energy, this.guildId, this.roleName)
    }
}