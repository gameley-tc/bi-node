const LogRole = require('./base/logRole')
const util = require('../utils')
const check = require('./check')

module.exports = class LogPay extends LogRole {
    constructor(params = {}) {
        check.check('logPay', params)
        super(params)
        this.payType = params.payType || 0
        this.orderNumber = params.orderNumber || ''
        this.dPrice = params.dPrice || 0
        this.dStoreNum = params.dStoreNum || 0
        this.totalNum = params.totalNum || 0
        this.fPayFlag = params.fPayFlag || 0
        this.payChannelId = params.payChannelId || 0
        this.payId = params.payId || ''
        this.payIdName = params.payIdName || ''
        this.dNum = params.dNum || 0
        this.dBeforeStoreNum = params.dBeforeStoreNum || 0

    }

    toLogStr() {
        return util.toLogStr('log_pay', super.toPayLogStr(), this.payType, this.orderNumber, this.dPrice, this.dStoreNum, this.totalNum, this.fPayFlag, this.payChannelId, this.payId, this.payIdName, this.dNum, this.dBeforeStoreNum)
    }
}