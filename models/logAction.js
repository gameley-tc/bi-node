const LogAccountRole = require('./base/logAccountRole')
const LogDevices = require('./base/logDevices')
const check = require('./check')

module.exports = class LogAction extends LogAccountRole {
    constructor(params = {}, devices = {}) {
        check.check('logAction', params)
        super(params)
        this.devices = new LogDevices(devices)
        this.type = params.type || 1
        this.actionType = params.actionType || 0
        this.actionNumber = params.actionNumber || 0
        this.g1 = params.g1 || 0
        this.g2 = params.g2 || 0
        this.g3 = params.g3 || 0
        this.g4 = params.g4 || 0
        this.g5 = params.g5 || 0
        this.g6 = params.g6 || 0
        this.s1 = params.s1 || ''
        this.s2 = params.s2|| ''
        this.s3 = params.s3 || ''
        this.s4 = params.s4 || ''
        this.s5 = params.s5 || ''
        this.s6 = params.s6 || ''
    }

    toLogStr() {
        return ['log_action', super.toLogStr(), this.devices.toLogStr(), this.type, this.actionType, this.actionNumber, this.g1,this.g2,this.g3,this.g4,this.g5,this.g6,this.s1,this.s2,this.s3,this.s4,this.s5,this.s6].join("|")
    }
}