const LogReason = require('./base/logReason')
const util = require('../utils')

module.exports = class LogLevel extends LogNewTask {
    constructor(params = {}) {
        super(params)
        this.taskId = params.taskId || 0
        this.orderId = params.orderId || 0
    }

    toString() {
        return util.toLogStr('log_new_task', super.toString(), this.taskId, this.orderId)
    }
}