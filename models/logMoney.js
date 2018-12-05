const LogReason = require('./base/logReason')
const util = require('../utils')
const check = require('./check')

module.exports = class LogMoney extends LogReason {
    constructor(params = {}) {
        check.check('logMoney', params)
        super(params)
        this.oldMoney = params.oldMoney || 0
        this.newMoney = params.newMoney || 0
        this.money = Math.abs(this.newMoney - this.oldMoney)
        // 道具个数
        this.num = params.num || 0
        this.addOrReduce = util.getChanged(this.newMoney - this.oldMoney)
        this.moneyType = params.moneyType || 0
        // 礼包名称及礼包中具体包含的各种物品名称都需要
        this.itemIdName = params.itemIdName || ''
        // 商店编号 区分不同的商店
        this.itemType = params.itemType || 0
        // 商品项ID 商店内唯一ID
        this.itemId = params.itemId || 0
        // 是否属于商城购买 0否 1是
        this.shop = params.shop || 0
    }

    toLogStr() {
        return util.toLogStr('log_money', super.toLogStr(), this.oldMoney, this.newMoney, this.money, this.num, this.addOrReduce, this.moneyType, this.itemIdName, this.itemType, this.itemId, this.shop)
    }
}