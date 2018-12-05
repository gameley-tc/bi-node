# bi-node
BI SDK for node

# example
see [Example](./example/index.ts)

# Usage

- `npm i @fitzix/bi-node` `yarn add @fitzix/bi-node`
- 引入库文件并初始化配置(只需在第一次使用时初始化一次)
```js
const bi = require('@fitzix/bi-node')
bi.init({
    game: 1,
    ip: "127.0.0.1",
    port: 8888,
    region: 1010001,
    channel: 2006603,
})
```
- 构造需要发送的日志结构(除必要参数外,剩余可根据日志结构表按需自行添加)
```js
let logAction = new bi.logAction({ uuid: 'sss', uid: 'ass', actionNumber: 23, actionType: 233, type: 1 })
let logAdVideo = new bi.logAdVideo({ uid: '23', subType: 1, type: 12 })
let logAppOnce = new bi.logAppOnce({ uuid: '2323', actionNumber: 2323 })
let logBattle = new bi.logBattle({ logType: 3, uid: '2323', battleId: 323, time: 121, battleType: 2323 })
let logCdKey = new bi.logCdKey({ uid: '2323', actionId: 'sdssds', cdkey: '232323', prize: '2323', failReason: 'sdsdsd' })
let logCu = new bi.logCu({ payNotNumber: 233, payNum: 23232 })
let logEnergy = new bi.logEnergy({ uid: 'dsds', oldEnergy: 12, newEnergy: 233 })
let logEquip = new bi.logEquip({ uid: '23232', addOrReduce: 1, equipId: 2323, equipType: 232, num: 112, sequenceId: 'sas', subReason: 'ass', reason: 'sasa' })
let logEquipDegree = new bi.logEquipDegree({ uid: '2323', equipId: 232, equipType: 2323, equipNewDegree: 12312, equipOldDegree: 21 })
let logEquipLevel = new bi.logEquipLevel({ uid: '2323', equipId: 2323, equipType: 2323, equipNewLevel: 232132, equipOldLevel: 232 })
let logEquipPlayWay = new bi.logEquipPlayWay({ uid: '232', equipId: 2323, equipNewLevel: 23232, equipOldLevel: 2323, equipType: 23, playType: 23 })
let logFriends = new bi.logFriends({ uid: 'dds', type: 23, newFriendsNum: 1212, oldFriendsNum: 232 })
let logGuild = new bi.logGuild({uid:'23232', guildId: 2323,logType: 2})
let logGamePattern = new bi.logGamePattern({ uid: '223', logType: 3, time: 23, patternId: 23, patternSubId: 23, patternType: 23 })
let logGuildDonate = new bi.logGuildDonate({ uid: '2323', guildId: 12 })
let logGuildLevel = new bi.logGuildLevel({ guildId: 12, guildNewLevel: 12, guildOldLevel: 3 })
let logGuildU = new bi.logGuildU({ logType: 1, uid: '23', guildId: 2323 })
let logItem = new bi.logItem({ uid: '2323', itemId: 23, itemType: 23, newNum: 2323, oldNum: 232 })
let logLevel = new bi.logLevel({ uid: '2323', level: 23, newLevel: 23223 })
let logLogin = new bi.logLogin({ loginType: 0, uid: '232' })
let logLoginU = new bi.logLoginU({ uid: '232' })
let logMoney = new bi.logMoney({ uid: '2323', num: 23, moneyType: 23, newMoney: 23, oldMoney: 232 })
let logNewTask = new bi.logNewTask({ uid: '232', orderId: 232323, taskId: 23 })
let logPay = new bi.logPay({ uid: '2323', dBeforeStoreNum: 233, dNum: 2323, dPrice: 23, dStoreNum: 23, fPayFlag: 0, orderNumber: '23232232', payType: 1, totalNum: 2332 })
let logPower = new bi.logPower({ uid: 'we23', newPower: 2323, oldPower: 223 })
let logReg = new bi.logReg({uid: '232'})
let logRegU = new bi.logRegU({uuid:'22323'})
let logShareIn = new bi.logShareIn({uid:'23323', type:1212, newPlayer: 1})
let logShareOut = new bi.logShareOut({uid:'23323', type:1212,})
let logTask = new bi.logTask({uid:'2323', taskId: 2323,taskType:33233})

bi.send(logAction)
bi.send(logAdVideo)
bi.send(logBattle   )
bi.send(logCdKey)
bi.send(logCu)
bi.send(logEnergy)
bi.send(logEquipDegree)
bi.send(logEquipLevel)
bi.send(logEquipPlayWay)
bi.send(logFriends)
bi.send(logGuild)
bi.send(logGamePattern)
bi.send(logGuildDonate)
bi.send(logGuildLevel)
bi.send(logGuildU)
bi.send(logItem)
bi.send(logLogin)
bi.send(logLevel)
bi.send(logLoginU)
bi.send(logMoney)
bi.send(logNewTask)
bi.send(logPay)
bi.send(logPower)
bi.send(logReg)
bi.send(logRegU)
bi.send(logShareIn)
bi.send(logShareOut)
bi.send(logTask)
```