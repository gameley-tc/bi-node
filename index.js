const dgram = require('dgram')
const config = require('./config')
const logAction = require('./models/logAction')
const logAdVideo = require('./models/logAdVideo')
const logAppOnce = require('./models/logAppOnce')
const logBattle = require('./models/logBattle')
const logCdKey = require('./models/logCdKey')
const logCu = require('./models/logCu')
const logEnergy = require('./models/logEnergy')
const logEquip = require('./models/logEquip')
const logEquipDegree = require('./models/logEquipDegree')
const logEquipLevel = require('./models/logEquipLevel')
const logEquipPlayWay = require('./models/logEquipPlayWay')
const logFriends = require('./models/logFriends')
const logGamePattern = require('./models/logGamePattern')
const logGuild = require('./models/logGuild')
const logGuildDonate = require('./models/logGuildDonate')
const logGuildLevel = require('./models/logGuildLevel')
const logGuildU = require('./models/logGuildU')
const logItem = require('./models/logItem')
const logLevel = require('./models/logLevel')
const logLogin = require('./models/logLogin')
const logLoginU = require('./models/logLoginU')
const logMoney = require('./models/logMoney')
const logNewTask = require('./models/logNewTask')
const logPay = require('./models/logPay')
const logPower = require('./models/logPower')
const logReg = require('./models/logReg')
const logRegU = require('./models/logRegU')
const logShareIn = require('./models/logShareIn')
const logShareOut = require('./models/logShareOut')
const logTask = require('./models/logTask')


module.exports = {
    init(option = {}) {
        config.init(option)
    },
    send(biModel) {
        let client = dgram.createSocket("udp4")
        client.send(biModel.toLogStr(), config.port, config.ip, (err, bytes) => {
            if (err != null) {
                console.error('【BISDK】日志发送失败', err)
            } else{
                console.log('【BISDK】', '发送日志--->', biModel.toLogStr())
            }
            client.close()
        })
    },
    logAction,
    logAdVideo,
    logAppOnce,
    logBattle,
    logCdKey,
    logCu,
    logEnergy,
    logEquip,
    logEquipDegree,
    logEquipLevel,
    logEquipPlayWay,
    logFriends,
    logGamePattern,
    logGuild,
    logGuildDonate,
    logGuildLevel,
    logGuildU,
    logItem,
    logLevel,
    logLogin,
    logLoginU,
    logMoney,
    logNewTask,
    logPay,
    logPower,
    logReg,
    logRegU,
    logShareIn,
    logShareOut,
    logTask
}
