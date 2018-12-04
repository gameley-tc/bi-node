const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogNewTask extends LogReason {
    constructor(params = {}) {
        check.check('logNewTask', params)
        super(params)
        this.taskId = params.taskId || 0
        this.orderId = params.orderId || 0
    }

    toString() {
        return util.toLogStr('log_new_task', super.toString(), this.taskId, this.orderId)
    }
}