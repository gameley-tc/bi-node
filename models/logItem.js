const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogItem extends LogReason {
    constructor(params = {}) {
        check.check('logItem', params)
        super(params)
        this.itemType = params.itemType || 0
        this.itemId = params.itemId || 0
        this.oldNum = params.oldNum || 0
        this.newNum = params.newNum || 0
        this.addOrReduce = util.getChanged(this.newNum, this.oldNum)
        this.num = Math.abs(this.newNum - this.oldNum)
    }

    toString() {
        return util.toLogStr('log_item', super.toString(), this.addOrReduce, this.itemType, this.itemId, this.oldNum, this.newNum, this.num)
    }
}