const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogTask extends LogReason {
    constructor(params = {}) {
        super(params)
        this.taskType = params.taskType || 0
        this.taskId = params.taskId || 0
    }

    toString() {
        return util.toLogStr('log_task', super.toString(), this.taskType, this.taskId)
    }
}