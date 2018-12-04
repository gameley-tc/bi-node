module.exports = {
    logAction: ['actionNumber', 'actionType', 'type', 'uid', 'uuid'],
    logAdVideo: ['uid', 'type', 'subType'],
    logAppOnce: ['uuid', 'actionNumber'],
    logBattle: ['uid', 'logType', 'battleType', 'battleId', 'time'],
    logCdKey: ['uid', 'actionId', 'cdkey', 'prize', 'failReason'],
    logCu: ['payNum', 'payNotNumber'],
    logEnergy: ['uid', 'oldEnergy', 'newEnergy'],
    logEquip: ['uid', 'sequenceId', 'reason', 'subReason', 'addOrReduce', 'equipType', 'equipId', 'num'],
    logEquipDegree: ['uid', 'equipType', 'equipId', 'equipOldDegree', 'equipNewDegree'],
    logEquipLevel: ['uid', 'equipType', 'equipId', 'equipOldLevel', 'equipNewLevel'],
    logEquipPlayWay: ['uid', 'equipType', 'equipId', 'equipOldLevel', 'equipNewLevel', 'playType'],
    logFriends: ['uid', 'oldFriendsNum', 'newFriendsNum', 'type'],
    logGamePattern: ['uid', 'logType', 'patternType', 'patternId', 'patternSubId', 'time'],
    logGuild: ['uid', 'logType', 'guildId'],
    logGuildDonate: ['uid', 'guildId'],
    logGuildLevel: ['guildId', 'guildOldLevel', 'guildNewLevel', 'guildLevel'],
    logGuildU: ['uid', 'logType', 'guildId'],
    logItem: ['uid', 'itemType', 'itemId', 'oldNum', 'newNum'],
    logLevel: ['uid', 'level', 'newLevel'],
    logLogin: ['uid', 'loginType'],
    logLoginU: ['uid'],
    logMoney: ['uid', 'oldMoney', 'newMoney', 'num', 'moneyType'],
    logNewTask: ['uid', 'taskId', 'orderId'],
    logPay: ['uid', 'payType', 'orderNumber', 'dPrice', 'dStoreNum', 'totalNum', 'fPayFlag', 'dNum', 'dBeforeStoreNum'],
    logPower: ['uid', 'oldPower', 'newPower'],
    logReg: ['uid'],
    logRegU: ['uuid'],
    logShareIn: ['uid', 'type', 'newPlayer'],
    logShareOut: ['uid', 'type'],
    logTask: ['uid', 'taskType', 'taskId'],

    check(tableName = '', params = {}) {
        for (let i of this[tableName]) {
            if (!params.hasOwnProperty(i)) {
                console.error('【BISDK】', '表', tableName, '缺少必要构造参数', i)
                return false
            }
        }
        return true
    }
}