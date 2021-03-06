const LogRole = require('./base/logRole')
const check = require('./check')

module.exports = class LogAdVideo extends LogRole {
    constructor(params = {}) {
        check.check('logAdVideo', params)
        super(params)
        this.type = params.type || 0
        this.subType = params.subType || 0
    }

    toLogStr() {
        return ['log_ad_video', super.toLogStr(), this.type, this.subType].join('|')
    }
}