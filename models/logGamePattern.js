const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogGamePattern extends LogReason {
    constructor(params = {}) {
        check.check('logGamePattern', params)
        super(params)
        // 日志类型 1战斗开始 2战斗成功结束 3战斗失败结束
        this.logType = params.logType || 1
        this.patternType = params.patternType || 0
        this.patternId = params.patternId || 0
        this.patternSubId = params.patternSubId || 0
        this.time = params.time || 0
    }

    toString() {
        return util.toLogStr('log_game_pattern', super.toString(), this.logType, this.patternType, this.patternId, this.patternSubId, this.time)
    }
}