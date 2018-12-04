const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogTask extends LogReason {
    constructor(params = {}) {
        check.check('logTask', params)
        super(params)
        this.taskType = params.taskType || 0
        this.taskId = params.taskId || 0
    }

    toString() {
        return util.toLogStr('log_task', super.toString(), this.taskType, this.taskId)
    }
}